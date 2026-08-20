import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface GitHubStats {
    username: string
    totalRepos: number
    totalStars: number
    repositories: Array<{
        name: string
        url: string
        language: string | null
        stars: number
        updatedAt: string
    }>
}

interface GitHubRepository {
    name: string
    html_url: string
    language: string | null
    stargazers_count: number
    updated_at: string
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

        const repos = await reposResponse.json() as GitHubRepository[]
        const totalStars = repos.reduce((acc: number, repo) => acc + repo.stargazers_count, 0)

        const stats: GitHubStats = {
            username,
            totalRepos: userData.public_repos,
            totalStars,
            repositories: repos
                .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                .slice(0, 8)
                .map((repo) => ({
                    name: repo.name,
                    url: repo.html_url,
                    language: repo.language,
                    stars: repo.stargazers_count,
                    updatedAt: repo.updated_at,
                })),
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

