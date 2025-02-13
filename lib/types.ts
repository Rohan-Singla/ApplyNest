export interface JobApplication {
    jobTitle: string;
    jobUrl: string;
    companyName: string;
    location: string;
    locationType: 'hybrid' | 'remote' | 'on-site';
    jobType: 'full time' | 'part time' | 'freelance' | 'contract';
    jobDescription: string;
    minSalary?: number;
    maxSalary?: number;
    currency?: string;
    dateCreated: string;
    dateApplied?: string;
    followUpDate?: string;
    priority?: 'low' | 'medium' | 'high';
    status: 'interview' | 'applying' | 'accepted' | 'rejected' | 'offered' | 'withdrawn';
    note?: string;
}
