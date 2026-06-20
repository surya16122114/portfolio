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
  type?: 'work' | 'research' | 'education' | 'leadership' | 'volunteer';
}

export const experiences: Experience[] = [
  {
    id: "humanitarians-ai",
    title: "AI Software Engineer",
    company: "Humanitarians AI",
    location: "Boston, MA",
    startDate: "Jun 2026",
    endDate: "Present",
    description:
      "Building a production AI education platform at Humanitarians AI — a Boston 501(c)(3) — combining Retrieval-Augmented Generation with LMS integration.",
    achievements: [
      "Built a RAG pipeline with a custom Mixture-of-Experts routing layer on GPT-4o-mini, routing student queries to specialist modes and injecting vector-searched textbook sources before inference",
      "Architected LTI 1.3 and Canvas integration enabling OIDC-based SSO, student provisioning, and grade synchronization via Assignment & Grade Services",
    ],
    type: 'volunteer',
  },
  {
    id: "gta-northeastern",
    title: "Graduate Teaching Assistant",
    company: "Northeastern University",
    location: "Boston, MA",
    startDate: "Sep 2025",
    endDate: "Apr 2026",
    description:
      "Taught algorithm implementation, class design, and object-oriented programming in Java to graduate students.",
    achievements: [
      "Assisted 150+ students with algorithms, class design, and OOP in Java, guiding hands-on labs and improving submission quality by 30%",
      "Mentored students and peer TAs through 1:1 office hours and code reviews on debugging, design patterns, and refactoring — cutting logical errors in final projects by 25%",
    ],
    type: 'education',
  },
  {
    id: "swe-uhg",
    title: "Software Engineer",
    company: "UnitedHealth Group",
    location: "Hyderabad, India",
    startDate: "Aug 2023",
    endDate: "Jul 2024",
    description:
      "Owned backend and frontend for a care-advisor communication platform serving 500K+ users.",
    achievements: [
      "Built a secure microservices-based messaging platform for care advisors with Java and Spring Boot for 500K+ users, increasing system throughput by 50%",
      "Implemented distributed messaging with Apache Kafka — an event-driven architecture for async member enrollment and downstream services — cutting API response time by 45%",
      "Reworked search APIs with improved PostgreSQL indexing and pagination, reducing profile lookup time by 70%",
      "Optimized rendering with React.memo, useMemo, useCallback, and route-based code splitting (React.lazy + Suspense), cutting page load time by 45% and improving Core Web Vitals by 35%",
    ],
    type: 'work',
  },
  {
    id: "ase-uhg",
    title: "Associate Software Engineer",
    company: "UnitedHealth Group",
    location: "Hyderabad, India",
    startDate: "Aug 2022",
    endDate: "Jul 2023",
    description:
      "Built responsive frontends and cloud infrastructure for healthcare communication platforms.",
    achievements: [
      "Built responsive React UIs with reusable components and custom hooks for data fetching and forms, reducing duplicate code by 40%",
      "Deployed services on AWS and GCP, provisioning infrastructure with Terraform and auto-scaling, cutting infrastructure costs by 15%",
      "Designed automated deployment with GitHub Actions and Docker, reducing manual deploy effort by 95% and enabling continuous delivery",
      "Built an OAuth 2.0 + JWT security framework for REST APIs with role-based access control, reducing unauthorized access attempts by 70%",
    ],
    type: 'work',
  },
];
