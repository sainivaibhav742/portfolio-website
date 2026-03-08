"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code, GitCommit, Star, Trophy, Award, TrendingUp, RefreshCw } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import { useEffect, useState } from "react"

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

interface LeetCodeStats {
    username: string
    totalSolved: number
    ranking: string
    easySolved: number
    mediumSolved: number
    hardSolved: number
}

export function CodingProfiles() {
    const [githubStats, setGithubStats] = useState<GitHubStats | null>(null)
    const [leetcodeStats, setLeetCodeStats] = useState<LeetCodeStats | null>(null)
    const [githubLoading, setGithubLoading] = useState(true)
    const [leetcodeLoading, setLeetcodeLoading] = useState(true)
    const [githubError, setGithubError] = useState(false)
    const [leetcodeError, setLeetcodeError] = useState(false)

    const fetchGitHubStats = async () => {
        setGithubLoading(true)
        setGithubError(false)
        try {
            const response = await fetch(`/api/github?username=${portfolioData.codingProfiles.github.username}`)
            if (!response.ok) throw new Error('Failed to fetch')
            const data = await response.json()
            setGithubStats(data)
        } catch (error) {
            console.error('GitHub fetch error:', error)
            setGithubError(true)
        } finally {
            setGithubLoading(false)
        }
    }

    const fetchLeetCodeStats = async () => {
        setLeetcodeLoading(true)
        setLeetcodeError(false)
        try {
            const response = await fetch(`/api/leetcode?username=${portfolioData.codingProfiles.leetcode.username}`)
            if (!response.ok) throw new Error('Failed to fetch')
            const data = await response.json()
            setLeetCodeStats(data)
        } catch (error) {
            console.error('LeetCode fetch error:', error)
            setLeetcodeError(true)
        } finally {
            setLeetcodeLoading(false)
        }
    }

    useEffect(() => {
        fetchGitHubStats()
        fetchLeetCodeStats()
    }, [])

    // Group contributions by week for the graph
    const getWeeklyContributions = () => {
        if (!githubStats?.contributions) return []

        const weeks = []
        for (let i = 0; i < githubStats.contributions.length; i += 7) {
            const week = githubStats.contributions.slice(i, i + 7)
            const totalCount = week.reduce((sum, day) => sum + day.count, 0)
            const avgLevel = Math.round(week.reduce((sum, day) => sum + day.level, 0) / week.length)
            weeks.push({ days: week, totalCount, level: avgLevel })
        }
        return weeks
    }

    return (
        <section id="coding-profiles" className="py-20 bg-gradient-to-b from-white to-cream/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4 max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
                            Coding Profiles
                        </h2>
                        <p className="text-lg text-textSecondary leading-relaxed">
                            Live statistics from my coding platforms - updated in real-time from APIs.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-16">
                        {/* GitHub Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-textPrimary/10 bg-white relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-textPrimary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <CardHeader className="pb-4 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-xl bg-textPrimary flex items-center justify-center text-white shadow-md">
                                                <Github size={24} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-2xl">GitHub</CardTitle>
                                                <span className="text-sm text-textSecondary">@{portfolioData.codingProfiles.github.username}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={fetchGitHubStats}
                                                disabled={githubLoading}
                                                className="text-textSecondary hover:text-textPrimary hover:bg-cream"
                                            >
                                                <RefreshCw size={18} className={githubLoading ? 'animate-spin' : ''} />
                                            </Button>
                                            <Button variant="ghost" size="icon" asChild className="text-textSecondary hover:text-textPrimary hover:bg-cream">
                                                <Link href={portfolioData.codingProfiles.github.url} target="_blank">
                                                    <ExternalLink size={20} />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative z-10 space-y-6">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <StatCard
                                            icon={<GitCommit size={14} />}
                                            label="Commits"
                                            value={githubLoading ? '...' : githubError ? portfolioData.codingProfiles.github.stats.commits : githubStats?.totalCommits}
                                            loading={githubLoading}
                                        />
                                        <StatCard
                                            icon={<Code size={14} />}
                                            label="Repos"
                                            value={githubLoading ? '...' : githubError ? portfolioData.codingProfiles.github.stats.repos : githubStats?.totalRepos}
                                            loading={githubLoading}
                                        />
                                        <StatCard
                                            icon={<Star size={14} />}
                                            label="Stars"
                                            value={githubLoading ? '...' : githubError ? portfolioData.codingProfiles.github.stats.stars : githubStats?.totalStars}
                                            loading={githubLoading}
                                        />
                                    </div>

                                    {/* Contribution Graph with VISIBLE GREEN COLORS */}
                                    <div className="flex flex-col gap-3 p-5 rounded-xl bg-white border border-textPrimary/10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-textPrimary">
                                                {githubLoading ? 'Loading Activity...' : 'Contribution Activity (Last 52 Weeks)'}
                                            </span>
                                            <TrendingUp size={16} className="text-textSecondary" />
                                        </div>

                                        {githubLoading ? (
                                            <div className="flex gap-1 flex-wrap">
                                                {Array.from({ length: 52 }).map((_, i) => (
                                                    <div key={i} className="w-3 h-3 rounded-sm bg-gray-200 animate-pulse" />
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex gap-1 flex-wrap">
                                                {getWeeklyContributions().map((week, i) => {
                                                    const intensity = week.level === 4 ? 'bg-green-600' :
                                                        week.level === 3 ? 'bg-green-500' :
                                                            week.level === 2 ? 'bg-green-400' :
                                                                week.level === 1 ? 'bg-green-300' : 'bg-gray-200'
                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`w-3 h-3 rounded-sm ${intensity} hover:ring-2 hover:ring-green-600/50 transition-all cursor-pointer`}
                                                            title={`Week ${i + 1}: ${week.totalCount} contributions`}
                                                        />
                                                    )
                                                })}
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 text-xs text-textSecondary">
                                            <span>Less</span>
                                            <div className="flex gap-1">
                                                <div className="w-3 h-3 rounded-sm bg-gray-200" />
                                                <div className="w-3 h-3 rounded-sm bg-green-300" />
                                                <div className="w-3 h-3 rounded-sm bg-green-400" />
                                                <div className="w-3 h-3 rounded-sm bg-green-500" />
                                                <div className="w-3 h-3 rounded-sm bg-green-600" />
                                            </div>
                                            <span>More</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* LeetCode Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-orange-200/50 bg-white relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <CardHeader className="pb-4 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                                                <Code size={24} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-2xl">LeetCode</CardTitle>
                                                <span className="text-sm text-textSecondary">@{portfolioData.codingProfiles.leetcode.username}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={fetchLeetCodeStats}
                                                disabled={leetcodeLoading}
                                                className="text-textSecondary hover:text-orange-600 hover:bg-orange-50"
                                            >
                                                <RefreshCw size={18} className={leetcodeLoading ? 'animate-spin' : ''} />
                                            </Button>
                                            <Button variant="ghost" size="icon" asChild className="text-textSecondary hover:text-orange-600 hover:bg-orange-50">
                                                <Link href={portfolioData.codingProfiles.leetcode.url} target="_blank">
                                                    <ExternalLink size={20} />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative z-10 space-y-6">
                                    {/* Total Solved Header */}
                                    <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-orange-700 font-semibold uppercase tracking-wide">Total Solved</span>
                                            <span className="text-5xl font-bold text-orange-600">
                                                {leetcodeLoading ? '...' : leetcodeError ? portfolioData.codingProfiles.leetcode.stats.solved : leetcodeStats?.totalSolved}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                                                <Trophy size={18} className="text-yellow-500" />
                                                <span className="text-sm font-bold text-textPrimary">
                                                    {leetcodeLoading ? '...' : leetcodeError ? portfolioData.codingProfiles.leetcode.stats.ranking : leetcodeStats?.ranking}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                                                <Award size={18} className="text-orange-500" />
                                                <span className="text-sm font-bold text-textPrimary">Active</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Problem Breakdown */}
                                    <div className="flex flex-col gap-4 p-5 rounded-xl bg-gradient-to-br from-offwhite/50 to-cream/50 border border-textPrimary/5">
                                        <span className="text-sm font-semibold text-textPrimary">Problem Breakdown</span>

                                        <ProblemStat
                                            difficulty="Easy"
                                            count={leetcodeLoading ? 0 : leetcodeError ? portfolioData.codingProfiles.leetcode.stats.easy : leetcodeStats?.easySolved || 0}
                                            color="green"
                                            loading={leetcodeLoading}
                                        />

                                        <ProblemStat
                                            difficulty="Medium"
                                            count={leetcodeLoading ? 0 : leetcodeError ? portfolioData.codingProfiles.leetcode.stats.medium : leetcodeStats?.mediumSolved || 0}
                                            color="yellow"
                                            loading={leetcodeLoading}
                                        />

                                        <ProblemStat
                                            difficulty="Hard"
                                            count={leetcodeLoading ? 0 : leetcodeError ? portfolioData.codingProfiles.leetcode.stats.hard : leetcodeStats?.hardSolved || 0}
                                            color="red"
                                            loading={leetcodeLoading}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Helper Components
function StatCard({ icon, label, value, loading }: { icon: React.ReactNode, label: string, value: any, loading: boolean }) {
    return (
        <div className={`flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-br from-beige to-cream border border-textPrimary/5 hover:border-textPrimary/10 transition-colors ${loading ? 'animate-pulse' : ''}`}>
            <div className="flex items-center gap-1.5 text-textSecondary text-xs font-medium uppercase tracking-wider">
                {icon}
                {label}
            </div>
            <span className="text-2xl font-bold text-textPrimary">{value}</span>
        </div>
    )
}

function ProblemStat({ difficulty, count, color, loading }: { difficulty: string, count: number, color: 'green' | 'yellow' | 'red', loading: boolean }) {
    const percentage = Math.round((count / 350) * 100)
    const colorClasses = {
        green: { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-600', gradient: 'from-green-400 to-green-500' },
        yellow: { bg: 'bg-yellow-100', border: 'border-yellow-200', text: 'text-yellow-600', gradient: 'from-yellow-400 to-yellow-500' },
        red: { bg: 'bg-red-100', border: 'border-red-200', text: 'text-red-600', gradient: 'from-red-400 to-red-500' },
    }
    const colors = colorClasses[color]

    return (
        <div className={`flex items-center gap-3 ${loading ? 'animate-pulse' : ''}`}>
            <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                <span className={`text-xl font-bold ${colors.text}`}>{count}</span>
            </div>
            <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-textPrimary">{difficulty}</span>
                    <span className="text-xs text-textSecondary">{percentage}%</span>
                </div>
                <div className="h-2.5 bg-textPrimary/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }} />
                </div>
            </div>
        </div>
    )
}
