import { JobApplication } from "./types";

const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
};
export const jobApplications: JobApplication[] = [
    {
        jobTitle: "Frontend Developer",
        jobUrl: "https://company.com/job/frontend-developer",
        companyName: "Tech Corp",
        location: "New York, USA",
        locationType: "hybrid",
        jobType: "full time",
        jobDescription: "Develop and maintain user-facing features for web applications.",
        minSalary: 60000,
        maxSalary: 80000,
        currency: "USD",
        dateCreated: formatDate(new Date('2025-02-01')),
        dateApplied: formatDate(new Date('2025-02-05')),
        followUpDate: formatDate(new Date('2025-02-15')),
        priority: "high",
        status: "interview",
        note: "Had an initial phone screen, waiting for next steps."
    },
    {
        jobTitle: "Backend Developer",
        jobUrl: "https://company.com/job/backend-developer",
        companyName: "Innovate Solutions",
        location: "Remote",
        locationType: "remote",
        jobType: "full time",
        jobDescription: "Work on API integrations and server-side logic.",
        minSalary: 70000,
        maxSalary: 90000,
        currency: "USD",
        dateCreated: formatDate(new Date('2025-02-01')),
        dateApplied: formatDate(new Date('2025-02-05')),
        followUpDate: formatDate(new Date('2025-02-15')),
        priority: "medium",
        status: "applying",
        note: ""
    },
    {
        jobTitle: "UI/UX Designer",
        jobUrl: "https://company.com/job/ui-ux-designer",
        companyName: "Creative Agency",
        location: "London, UK",
        locationType: "on-site",
        jobType: "part time",
        jobDescription: "Design engaging user interfaces and experiences.",
        minSalary: 30000,
        maxSalary: 40000,
        currency: "GBP",
        dateCreated: formatDate(new Date('2025-02-01')),
        dateApplied: formatDate(new Date('2025-02-05')),
        followUpDate: formatDate(new Date('2025-02-15')),
        priority: "low",
        status: "rejected",
        note: "Received feedback, wasn't a good fit."
    },
    {
        jobTitle: "Freelance Content Writer",
        jobUrl: "https://company.com/job/content-writer",
        companyName: "Content Hive",
        location: "Remote",
        locationType: "remote",
        currency: "INR",
        minSalary: 30000,
        maxSalary: 40000,
        jobType: "freelance",
        jobDescription: "Create blog posts and marketing content.",
        dateCreated: formatDate(new Date('2025-02-01')),
        dateApplied: formatDate(new Date('2025-02-05')),
        followUpDate: formatDate(new Date('2025-02-15')),
        priority: "medium",
        status: "applying",
        note: ""
    }
];
