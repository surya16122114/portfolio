export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "cloud-native-app",
    title: "Cloud Native Web Application",
    description: "Deployed a scalable and highly available web application using AWS, Terraform, and GitHub Actions.",
    longDescription: "Configured network infrastructure on AWS using Terraform, including VPCs, subnets, DNS zones, and firewall rules. Implemented load balancers, auto-scalers, and auto-healing policies to ensure high availability. Designed a CI/CD pipeline with GitHub Actions for automated unit testing and seamless deployment.",
    technologies: ["AWS", "Terraform", "CI/CD", "GitHub Actions", "Load Balancing", "Auto Scaling"],
    achievements: [
      "Provisioned VPCs, subnets, and DNS zones using Terraform",
      "Configured security groups and firewall rules for controlled access",
      "Integrated auto-scalers and healing policies to maintain uptime",
      "Built CI/CD pipeline with GitHub Actions for automated testing and deployment"
    ],
    //image: "/images/projects/cloud-native/cloud-native.jpg",
    image:"/images/projects/cloud-native/cloud-native.jpg",
    featured: true
  },
  {
    id: "movie-booking-system",
    title: "Popcorn Pal",
    description: "A full-stack platform for browsing movies, booking seats, and managing roles using Spring Boot and React.",
    longDescription: "Built a movie booking platform with Spring Boot and React, allowing users to register, log in, browse movies, and book seats. Integrated JWT-based authentication and role-based access for users, admins, and theater owners. Designed a normalized MySQL schema and used design patterns like Repository, Singleton, and Factory for clean and scalable code.",
    technologies: ["Spring Boot", "React", "MySQL", "JWT", "SOLID", "Design Patterns"],
    achievements: [
      "Implemented JWT-based auth and RBAC for users, admins, and owners",
      "Followed SOLID principles and applied Repository, Singleton, Factory patterns",
      "Designed normalized MySQL schema for scalable movie-theater-booking data model"
    ],
    image:"/images/projects/popcornpal/popcornpal.jpg",
    featured: true
  },
  {
    id: "student-accommodation",
    title: "Roomies Radar",
    description: "Built a real-time accommodation portal with PWA features, WebSockets, and modern state management.",
    longDescription: "Developed a progressive web application with RESTful APIs using Express.js and MongoDB to manage user profiles, property listings, and chat data. The frontend was built using React and TypeScript, with responsive design and seamless navigation. Integrated Redux for efficient state handling and WebSockets for real-time communication. Leveraged PWA capabilities and experimental Fugu APIs for an installable, native-like experience and enhanced device-level features.",
    technologies: [
      "Express.js", "MongoDB", "React", "TypeScript", "Redux", "WebSockets",
      "PWA", "Fugu APIs", "Service Workers", "IndexedDB"
    ],
    achievements: [
      "Developed REST APIs to manage user profiles, listings, and chat data",
      "Used WebSockets for real-time messaging and instant updates",
      "Implemented Redux for optimized and scalable state management",
      "Enhanced UX with PWA features like offline support, installability, and caching",
      "Explored Fugu APIs (e.g., file system access, clipboard) for native-like capabilities"
    ],
    //image: "/images/projects/student-accommodation/student-accommodation.jpg",
    image:"/images/projects/roomies-radar/roomies-radar.jpg",
    featured: true
  }
];