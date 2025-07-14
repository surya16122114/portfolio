// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'research' | 'education' | 'leadership';
}

export const experiences: Experience[] = [
  {
    id: "swe-optum",
    title: "Software Engineer",
    company: "United Health Group",
    location: "Hyderabad, India",
    startDate: "September 2023",
    endDate: "July 2024",
    description:
      "Owned key modules in enterprise-scale health tech solutions and led performance and deployment enhancements.",
    achievements: [
      "Led the launch of advocacy and health navigation capabilities, achieving market parity within six months and retaining UHC national accounts.",
      "Architected and deployed scalable APIs using NestJS and GraphQL, integrated with Hasura, improving API performance by 20%.",
      "Executed comprehensive performance/load testing using NeoLoad and Blue Jay to support 5,000+ concurrent users.",
      "Resolved 300+ SonarQube issues to maintain high code quality standards and CI/CD readiness.",
      "Collaborated with 20+ cross-functional team members, accelerating release cycles by 30%, and drove 10+ successful production deployments."
    ],
    type: 'work'
  },
  {
    id: "ase-optum",
    title: "Associate Software Engineer",
    company: "United Health Group",
    location: "Hyderabad, India",
    startDate: "August 2022",
    endDate: "August 2023",
    description:
      "Contributed to full-stack feature development, testing, and quality assurance across key digital health platforms.",
    achievements: [
      "Engineered key components of a responsive web application for over 500,000 users using Angular, Netra Library, and NestJS.",
      "Designed the Message Center UI in an Outlook-style format, collaborating with senior engineers to integrate backend APIs.",
      "Developed unit tests using Jasmine and Jest, contributing to 85% test coverage and helping reduce defects by 40%.",
      "Used Hasura Console to configure GraphQL APIs and permissions, supporting secure and efficient data access.",
      "Assisted in resolving 100+ internal tickets and helped maintain 99.9% application uptime through prompt debugging and support."
    ],
    type: 'work'
  } 
];