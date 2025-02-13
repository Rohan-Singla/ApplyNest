import React, { useState } from 'react'
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
} from "@/components/ui/sheet"
import { jobApplications } from '@/lib/data';

const ApplicationTable = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleExpand = (index: number | null) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <>
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
                        {jobApplications.map((app) => (
                            <Sheet>
                                <tr key={app.companyName} className="border-b last:border-0 cursor-pointer hover:bg-zinc-800/50">
                                    <td className="py-3 px-4 border-b border-r border-gray-400">{app.companyName}</td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">{app.jobTitle}</td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">
                                        {app.currency}
                                        {app.maxSalary}
                                    </td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">{app.location}</td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">
                                        <span className={`inline-block px-2 py-1 rounded-full text-md bg-blue-500`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">{app.dateCreated.toString()}</td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">{app.dateApplied?.toString()}</td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">{app.followUpDate?.toString()}</td>
                                    <td className="py-3 px-4 border-b border-r border-gray-400">
                                        <span className={`inline-block px-2 py-1 rounded-full text-md bg-red-800 text-red-100`}>
                                            {app.priority}
                                        </span>
                                    </td>
                                </tr>
                            </Sheet>
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

            <div className="md:hidden space-y-2">
                <div className="bg-zinc-800 text-gray-300 rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-2 text-sm font-semibold p-2 border-b border-zinc-700">
                        <span className="text-center border-r">Job</span>
                        <span className="text-center">Status</span>
                    </div>
                    {jobApplications.map((app, index) => (
                        <div key={app.companyName} className="border-b border-zinc-700">
                            <div
                                className="grid grid-cols-2 p-2 hover:bg-zinc-700 cursor-pointer"
                                onClick={() => toggleExpand(index)}
                            >
                                <span className="text-center border-r">{app.jobTitle.slice(0, 10)}... <br /><span className="text-gray-400">{app.companyName}</span> </span>
                                <span className="py-3 px-4">
                                    <span className={`inline-block px-2 py-1 rounded-full text-md bg-blue-500`}>
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
                                        <span>{app.currency}{app.maxSalary}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Created: </span>
                                        <span>{app.dateCreated.toString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Applied: </span>
                                        <span>{app.dateApplied?.toString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Follow up: </span>
                                        <span>{app.followUpDate?.toString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Priority: </span>
                                        <span className="bg-red-500">{app.priority}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <Pagination className="pt-5">
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
        </>
    )
}

export default ApplicationTable