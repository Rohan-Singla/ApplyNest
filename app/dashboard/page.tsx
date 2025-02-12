"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
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
const metrics = [
  {
    title: "Total Active Applications",
    value: "24",

    color: "text-blue-500",
  },
  {
    title: "Interviewing",
    value: "8",

    color: "text-yellow-500",
  },
  {
    title: "Applying",
    value: "10",
    color: "text-purple-500",
  },
  {
    title: "Accepted",
    value: "10",
    color: "text-green-500",
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
  {
    company: "Zomato",
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
  {
    company: "microsoft",
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
  const [expanded, setExpanded] = useState<number | null>(null);
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

  const toggleExpand = (index: number | null) => {
    setExpanded(expanded === index ? null : index);
  };
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

              {/* Desktop view */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300 border-t">
                      <th className="text-left py-3 px-4">Company</th>
                      <th className="text-left py-3 px-4">Position</th>
                      <th className="text-left py-3 px-4">Max.Salary</th>
                      <th className="text-left py-3 px-4">Location</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Date Created</th>
                      <th className="text-left py-3 px-4">Date Applied</th>
                      <th className="text-left py-3 px-4">Follow Up</th>
                      <th className="text-left py-3 px-4">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app) => (
                      <tr key={app.company} className="border-b last:border-0 cursor-pointer hover:bg-zinc-800/50">
                        <td className="py-3 px-4 border-b border-r border-gray-400">{app.company}</td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">{app.position}</td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">
                          {app.currency}
                          {app.maxsalary}
                        </td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">{app.location}</td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">
                          <span className={`inline-block px-2 py-1 rounded-full text-md ${app.statusColor}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">{app.datecreated}</td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">{app.dateapplied}</td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">{app.followupdate}</td>
                        <td className="py-3 px-4 border-b border-r border-gray-400">
                          <span className={`inline-block px-2 py-1 rounded-full text-md ${app.priorityColor}`}>
                            {app.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination className="mt-5">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              {/* Mobile view */}
              <div className="md:hidden space-y-2">
                <div className="bg-zinc-800 text-gray-300 rounded-lg shadow-lg overflow-hidden">
                  <div className="grid grid-cols-2 text-sm font-semibold p-2 border-b border-zinc-700">
                    <span className="text-center border-r">Job</span>
                    {/* <span>Company</span> */}
                    <span className="text-center">Status</span>
                  </div>
                  {recentApplications.map((app, index) => (
                    <div key={app.company} className="border-b border-zinc-700">
                      <div
                        className="grid grid-cols-2 p-2 hover:bg-zinc-700 cursor-pointer"
                        onClick={() => toggleExpand(index)}
                      >
                        <span className="text-center border-r">{app.position.slice(0, 10)}... <br /><span className="text-gray-400">{app.company}</span> </span>
                        <span className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-md ${app.statusColor}`}>
                            {app.status}
                          </span>
                        </span>
                      </div>
                      {expanded === index && (
                        <div className="p-2 text-lg bg-zinc-900 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Location: </span>
                            <span>{app.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Salary: </span>
                            <span>{app.currency}{app.maxsalary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Created: </span>
                            <span>{app.datecreated}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Applied: </span>
                            <span>{app.dateapplied}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Follow up: </span>
                            <span>{app.followupdate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Priority: </span>
                            <span className={`${app.priorityColor}`}>{app.priority}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>


            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

