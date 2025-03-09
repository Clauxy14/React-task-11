//src/job.ts

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Data Insights",
    location: "Lagos",
    salary: "₦500,000",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Abuja",
    salary: "₦350,000",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "App Innovators",
    location: "Remote",
    salary: "₦450,000",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Remote",
    salary: "₦550,000",
  },
  {
    id: 7,
    title: "QA Tester",
    company: "Test Masters",
    location: "Ibadan",
    salary: "₦250,000",
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Product Pioneers",
    location: "Lagos",
    salary: "₦600,000",
  },
  {
    id: 9,
    title: "Sales Representative",
    company: "Sales Force",
    location: "Port Harcourt",
    salary: "₦200,000",
  },
  {
    id: 10,
    title: "Customer Support",
    company: "Support Heroes",
    location: "Remote",
    salary: "₦180,000",
  },
  {
    id: 11,
    title: "Fullstack Developer",
    company: "Fullstack Inc",
    location: "Remote",
    salary: "₦650,000",
  },
  {
    id: 12,
    title: "Network Engineer",
    company: "NetWorks",
    location: "Kano",
    salary: "₦380,000",
  },
];
