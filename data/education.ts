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
      degree: "Master's in Computer Software Engineering",
      institution: "Northeastern University",
      location: "Boston, Massachusetts, USA",
      startDate: "August 2024",
      endDate: "May 2026"
    },
    {
      id: "nitrr",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "National Institute of Technology Raipur",
      location: "Raipur, India",
      startDate: "July 2018",
      endDate: "May 2022",
      gpa: "8.65/10.00"
    }
  ];