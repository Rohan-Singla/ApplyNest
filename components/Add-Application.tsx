"use client"

import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function JobDetailsDialog() {
    const [open, setOpen] = useState(false)
    const [jobDetails, setJobDetails] = useState({
        title: "",
        url: "",
        company: "",
        location: "",
        locationtype: "",
        jobtype: "",
        description: "",
        currency: "$",
        maxsalary: 14500,
        minsalary: 12000,
        datecreated: "2/11/2025",
        dateapplied: "2/11/2025",
        followupdate: "5/11/2025",
        note: "",
        priority: "Top"
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setJobDetails((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (value: string) => {
        setJobDetails((prev) => ({ ...prev, type: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(jobDetails)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="text-white">Add Application <Plus /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-zinc-900 text-white border-none">
                <DialogHeader>
                    <DialogTitle className="pt-4 text-blue-400 text-2xl">Add a New Job Application</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="title" className="text-md">
                            Job Title
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            value={jobDetails.title}
                            onChange={handleInputChange}
                            className="col-span-3 bg-gray-800 border-gray-700"
                            placeholder="Job Title"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="url" className="text-md">
                            URL of Posting
                        </Label>
                        <Input
                            id="url"
                            name="url"
                            value={jobDetails.url}
                            onChange={handleInputChange}
                            className="col-span-3 bg-gray-800 border-gray-700"
                            placeholder="URL To Original Job Posting"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="company" className="text-md">
                            Company Name
                        </Label>
                        <Input
                            id="company"
                            name="company"
                            value={jobDetails.company}
                            onChange={handleInputChange}
                            className="col-span-3 bg-gray-800 border-gray-700"
                            placeholder="Company Name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location" className="text-md">
                            Location
                        </Label>
                        <Input
                            id="location"
                            name="location"
                            value={jobDetails.location}
                            onChange={handleInputChange}
                            className="col-span-3 bg-gray-800 border-gray-700"
                            placeholder="Job Location"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="locationtype" className="text-md">
                            Location Type
                        </Label>
                        <Select onValueChange={(value) => setJobDetails((prev) => ({ ...prev, locationtype: value }))}>
                            <SelectTrigger className="col-span-3 bg-gray-800 border-gray-700">
                                <SelectValue placeholder="Select Location Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                                <SelectItem value="On-site">On-site</SelectItem>
                                <SelectItem value="Hybrid">Hybrid</SelectItem>
                                <SelectItem value="Remote">Remote</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="type" className="text-md">
                            Job Type
                        </Label>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="col-span-3 bg-gray-800 border-gray-700">
                                <SelectValue placeholder="Select Job Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="part-time">Part-time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                                <SelectItem value="freelance">Freelance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="description" className="text-md">
                            Job Description
                        </Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={jobDetails.description}
                            onChange={handleInputChange}
                            className="col-span-3 bg-gray-800 border-gray-700"
                            rows={4}
                            placeholder="Job Description"
                        />
                    </div>
                    <div className="flex">
                        <DialogClose asChild>
                            <Button type="button" className="bg-red-600 text-white hover:bg-red-500">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" className="ml-auto text-white bg-blue-600 hover:bg-blue-500">
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>
    )
}

