"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Layout } from "@/components/providers/DashboardLayout"
import { useSession } from "next-auth/react"

const metrics = [
  {
    title: "Total Active Applications",
    value: "24",

    color: "text-blue-500",
  },
  {
    title: "Interviewing",
    value: "8",

    color: "text-green-500",
  },
  {
    title: "Applying",
    value: "10",
    color: "text-purple-500",
  },
]

const recentApplications = [
  {
    company: "Google",
    position: "Software Engineer",
    dateApplied: "Jan 15, 2024",
    status: "Interview",
    statusColor: "text-green-500 bg-green-500/10",
  },
  {
    company: "Microsoft",
    position: "Frontend Developer",
    dateApplied: "Jan 12, 2024",
    status: "Pending",
    statusColor: "text-yellow-500 bg-yellow-500/10",
  },
  {
    company: "Amazon",
    position: "Full Stack Developer",
    dateApplied: "Jan 10, 2024",
    status: "Applied",
    statusColor: "text-blue-500 bg-blue-500/10",
  },
]

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const { data: session } = useSession()
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={container} className="max-w-7xl mx-auto space-y-8">
        <div>
          <motion.h1 variants={item} className="text-2xl font-semibold text-white">
            Welcome {session?.user?.name} !
          </motion.h1>
          <motion.p variants={item} className="text-gray-300 text-xl mt-3">
            Track and organize your job applications to get your Dream Job !
          </motion.p>
        </div>

        <motion.div variants={item} className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.title} className="bg-zinc-900 text-center border-none py-2">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-muted-foreground text-white">{metric.title}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-zinc-900 border-none p-2">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Applications</h2>
                <Button className="text-white">Add Application</Button>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-64 md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white bg-zinc-950" />
                  <Input
                    placeholder="Search Applications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 text-white bg-zinc-950 h-11"
                  />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-40 p-4 text-md">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-zinc-950 text-md">
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-full md:w-40 p-4 text-md">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-zinc-950 text-sm">
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Company</th>
                      <th className="text-left py-3 px-4">Position</th>
                      <th className="text-left py-3 px-4">Date Applied</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app) => (
                      <tr key={app.company} className="border-b last:border-0">
                        <td className="py-3 px-4">{app.company}</td>
                        <td className="py-3 px-4">{app.position}</td>
                        <td className="py-3 px-4">{app.dateApplied}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs ${app.statusColor}`}>
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

