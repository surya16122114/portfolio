export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/surya16122114",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chinnasurya-prasad-vulavala-119b5816b/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:chinnasuryaprasad2001@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+18573519241",
      icon: "phone"
    }
  ];