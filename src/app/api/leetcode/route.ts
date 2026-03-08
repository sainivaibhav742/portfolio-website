import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface LeetCodeStats {
  username: string
  totalSolved: number
  ranking: string
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  recentSubmissions: Array<{
    timestamp: number
    count: number
  }>
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || 'vaibhav3421'

  try {
    // LeetCode GraphQL endpoint (unofficial but widely used)
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
              }
              submissionCalendar
            }
          }
        `,
        variables: { username }
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data')
    }

    const data = await response.json()

    if (!data.data?.matchedUser) {
      throw new Error('User not found')
    }

    const user = data.data.matchedUser
    const submissions = user.submitStats.acSubmissionNum

    // Extract stats by difficulty
    const allProblems = submissions.find((s: any) => s.difficulty === 'All')
    const easy = submissions.find((s: any) => s.difficulty === 'Easy')
    const medium = submissions.find((s: any) => s.difficulty === 'Medium')
    const hard = submissions.find((s: any) => s.difficulty === 'Hard')

    const totalSolved = allProblems?.count || 0
    const ranking = user.profile?.ranking || 0

    // Calculate ranking percentile (approximate)
    const totalUsers = 500000 // Approximate total LeetCode users
    const percentile = ((totalUsers - ranking) / totalUsers * 100).toFixed(0)

    // Parse submission calendar
    const submissionCalendar = user.submissionCalendar ? JSON.parse(user.submissionCalendar) : {}
    const recentSubmissions: Array<{ timestamp: number; count: number }> = []

    // Get last 52 weeks of submissions
    const now = Math.floor(Date.now() / 1000)
    const oneYearAgo = now - (365 * 24 * 60 * 60)

    Object.entries(submissionCalendar).forEach(([timestamp, count]) => {
      const ts = parseInt(timestamp)
      if (ts >= oneYearAgo) {
        recentSubmissions.push({ timestamp: ts, count: count as number })
      }
    })

    const stats: LeetCodeStats = {
      username,
      totalSolved,
      ranking: `Top ${percentile}%`,
      easySolved: easy?.count || 0,
      mediumSolved: medium?.count || 0,
      hardSolved: hard?.count || 0,
      acceptanceRate: 0,
      recentSubmissions: recentSubmissions.sort((a, b) => a.timestamp - b.timestamp)
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('LeetCode API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode stats' },
      { status: 500 }
    )
  }
}
