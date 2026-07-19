export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  accent: "amber" | "purple" | "emerald";
  stats: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "YOC.ai",
    subtitle: "AI Interview Coach",
    description:
      "An AI-powered interview preparation platform featuring voice conversations, personalized feedback, and realistic mock interviews using VAPI and LLMs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "VAPI",
      "Tailwind",
    ],
    github: "https://github.com/KeshavDeploys/YOC.ai",
    live: "https://yoc-ai.vercel.app",
    featured: true,
    accent: "purple",
    stats: [
      {
        label: "AI",
        value: "Voice",
      },
      {
        label: "Platform",
        value: "Web",
      },
    ],
  },
  {
    id: 2,
    title: "Attendance System",
    subtitle: "AWS Rekognition",
    description:
      "A completely serverless attendance solution using AWS Rekognition, Lambda, API Gateway and DynamoDB for real-time face recognition.",
    technologies: [
      "AWS",
      "Lambda",
      "Rekognition",
      "DynamoDB",
      "S3",
    ],
    github:
      "https://github.com/KeshavDeploys/Serverless-Attendance-System-using-AWS",
    featured: true,
    accent: "amber",
    stats: [
      {
        label: "Accuracy",
        value: "99%",
      },
      {
        label: "Latency",
        value: "<1s",
      },
    ],
  },
  {
    id: 3,
    title: "Feedback Collector",
    subtitle: "Serverless AWS",
    description:
      "Built a scalable feedback collection platform using Lambda, API Gateway and DynamoDB with an admin dashboard for analytics.",
    technologies: [
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "AWS",
    ],
    github:
      "https://github.com/KeshavDeploys/Serverless-Feedback-Collector-AWS",
    featured: true,
    accent: "emerald",
    stats: [
      {
        label: "Server",
        value: "0",
      },
      {
        label: "Scale",
        value: "Auto",
      },
    ],
  },
];