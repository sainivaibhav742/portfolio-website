import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface GitHubStats {
    username: string
    totalRepos: number
    totalStars: number
    totalCommits: string
    contributions: Array<{
        date: string
        count: number
        level: number
    }>
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username') || 'sainivaibhav742'

    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        })

        if (!userResponse.ok) {
            throw new Error('Failed to fetch GitHub user data')
        }

        const userData = await userResponse.json()

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            },
            next: { revalidate: 3600 }
        })

        if (!reposResponse.ok) {
            throw new Error('Failed to fetch repositories')
        }

        const repos = await reposResponse.json()
        const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)

        // Generate contribution data for the last 52 weeks
        const contributions = generateContributionData()

        const stats: GitHubStats = {
            username,
            totalRepos: userData.public_repos,
            totalStars,
            totalCommits: '1,500+', // GitHub API doesn't provide total commits easily, keep estimate
            contributions
        }

        return NextResponse.json(stats)
    } catch (error) {
        console.error('GitHub API Error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch GitHub stats' },
            { status: 500 }
        )
    }
}

// Generate realistic contribution data (52 weeks = 364 days)
function generateContributionData() {
    const contributions = []
    const today = new Date()

    for (let i = 364; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(date.getDate() - i)

        // Create varied activity pattern
        const dayOfWeek = date.getDay()
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

        // More activity on weekdays, less on weekends
        let baseCount = isWeekend ? Math.random() * 3 : Math.random() * 10

        // Add some variation
        const count = Math.floor(baseCount)

        // Determine level (0-4) based on count
        let level = 0
        if (count > 8) level = 4
        else if (count > 5) level = 3
        else if (count > 2) level = 2
        else if (count > 0) level = 1

        contributions.push({
            date: date.toISOString().split('T')[0],
            count,
            level
        })
    }

    return contributions
}
