export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "northeastern",
    degree: "M.S. in Computer Software Engineering",
    institution: "Northeastern University",
    location: "Boston, MA",
    startDate: "Aug 2024",
    endDate: "Apr 2026",
    gpa: "3.79 / 4.0",
    description:
      "Distributed systems, object-oriented design, network structures & cloud computing, and machine learning. Graduate Teaching Assistant for Object-Oriented Design.",
  },
  {
    id: "nitrr",
    degree: "B.Tech in Electronics & Telecommunication Engineering",
    institution: "National Institute of Technology, Raipur",
    location: "Raipur, India",
    startDate: "Jul 2018",
    endDate: "May 2022",
    gpa: "8.65 / 10.0",
  },
];
