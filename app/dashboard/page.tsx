"use client"

import { motion } from "framer-motion"
import { File, FileUser, Handshake, Plus, Search, User, Users } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Layout } from "@/components/providers/DashboardLayout"
import { useSession } from "next-auth/react"
import JobDetailsDialog from "@/components/Add-Application"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ApplicationTable from "@/components/Application-Table"

const metrics = [
  {
    title: "Active Applications",
    value: "24",
    color: "text-blue-500",
    icon: <File />
  },
  {
    title: "Interviewing",
    value: "8",
    color: "text-yellow-500",
    icon: <Users />
  },
  {
    title: "Applying",
    value: "10",
    color: "text-purple-500",
    icon: <FileUser />
  },
  {
    title: "Accepted",
    value: "10",
    color: "text-green-500",
    icon: <Handshake />
  },
]

const recentApplications = [
  {
    company: "Google",
    position: "Software Engineer",
    status: "Interview",
    statusColor: "text-green-500 bg-green-500/10",
    priorityColor: "text-red-500 bg-red-500/10",
    currency: "$",
    maxsalary: 14500,
    minsalary: 12000,
    datecreated: "2/11/2025",
    dateapplied: "2/11/2025",
    followupdate: "5/11/2025",
    jobpostingurl: "",
    jobdesc: "",
    jobtype: "remote",
    location: "USA",
    note: "",
    priority: "Top"
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
            Welcome <span className="text-blue-400">{session?.user?.name}!</span>
          </motion.h1>
          <motion.p variants={item} className="text-gray-300 text-xl mt-3">
            Track and organize your job applications to get your Dream Job !
          </motion.p>
        </div>

        <motion.div variants={item} className="grid gap-4 md:grid-cols-4 grid-cols-2">
          {metrics.map((metric) => (
            <Card key={metric.title} className="bg-zinc-900 py-2 border border-gray-600">
              <CardContent className="p-6 flex justify-between">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-muted-foreground text-white">{metric.title}</p>
                  <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <div className="icon">
                  {metric.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-zinc-900 border-none p-2">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-md font-semibold">Recent Applications</h2>
                <JobDetailsDialog />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-64">
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

              {/* Application Table for Mobile and DeskTop */}

              <ApplicationTable />

            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

