export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    year: "2026",
    role: "Cloud Security Trainee",
    company: "eSec Forte",
    description: "Mar 2026 – Present",
    skills: ["AWS", "Prisma Cloud", "Cloud Security", "Container Security", "Wiz"],
    highlights: [
      "Reviewed cloud vulnerabilities across enterprise AWS environments",
      "Conducted security assessments using Prisma Cloud",
      "Delivered remediation recommendations for security findings",
    ],
  },

  {
    year: "2025",
    role: "AWS Engineer Intern",
    company: "F13 Technologies",
    description: "Jun 2025 – Sept 2025",
    skills: [
      "AWS",
      "EC2",
      "Lambda",
      "S3",
      "CloudFront",
      "DynamoDB",
    ],
    highlights: [
      "Migrated an e-commerce platform using Lightsail, RDS, S3, and CloudFront",
      "Built a face recognition attendance system with Rekognition and Lambda",
      "Developed a multi-vendor inventory platform using EC2 and DynamoDB",
    ],
  },

  {
    year: "2025",
    role: "Cloud Intern",
    company: "WoRisGo",
    description: "Mar 2025 – Apr 2025",
    skills: [
      "AWS",
      "Cognito",
      "AWS Lambda",
      "API Gateway",
      "GCP",
    ],
    highlights: [
      "Implemented secure authentication with AWS Cognito",
      "Built a serverless To-Do application using AWS Lambda",
      "Integrated backend APIs through Amazon API Gateway",
    ],
  },
];