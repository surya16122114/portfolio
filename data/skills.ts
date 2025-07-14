// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Web Technologies' 
  | 'Databases'
  | 'Cloud/DevOps' 
  | 'Tools'
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'SQL', category: 'Languages', logoKey: 'sql' },       // was mysql
  ],
  'Web Technologies': [
    { name: 'React.js', category: 'Web Technologies', logoKey: 'react' },
    { name: 'Node.js', category: 'Web Technologies', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Web Technologies', logoKey: 'nextjs' },
    { name: 'Nest.js', category: 'Web Technologies', logoKey: 'nestjs' },
    { name: 'Express.js', category: 'Web Technologies', logoKey: 'express' },
    { name: 'Tailwind CSS', category: 'Web Technologies', logoKey: 'tailwindcss' },
    { name: 'Bootstrap', category: 'Web Technologies', logoKey: 'bootstrap' },
    { name: 'Angular', category: 'Web Technologies', logoKey: 'angularjs' },
    { name: 'Spring Boot', category: 'Web Technologies', logoKey: 'spring' },      // was springboot
    { name: 'REST', category: 'Web Technologies', logoKey: 'rest' },
    { name: 'GraphQL', category: 'Web Technologies', logoKey: 'graphql' },         // capital, lowercase key
    { name: 'Jest', category: 'Web Technologies', logoKey: 'jest' },
    { name: 'Jasmine', category: 'Web Technologies', logoKey: 'jasmine' },
    { name: 'Karma', category: 'Web Technologies', logoKey: 'karma' },
    { name: 'Cypress', category: 'Web Technologies', logoKey: 'cypress' },
  ],
  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'aws' },            // was amazonwebservices
    { name: 'GCP', category: 'Cloud/DevOps', logoKey: 'googlecloud' },   // "googlecloud"
    { name: 'Microsoft Azure', category: 'Cloud/DevOps', logoKey: 'azure' },
    { name: 'Packer', category: 'Cloud/DevOps', logoKey: 'packer' },
    { name: 'Terraform', category: 'Cloud/DevOps', logoKey: 'terraform' },
  ],
  'Databases': [
    { name: 'MySQL', category: 'Databases', logoKey: 'mysql' },
    { name: 'PostgreSQL', category: 'Databases', logoKey: 'postgresql' },
    { name: 'MongoDB', category: 'Databases', logoKey: 'mongodb' },
  ],
  'Concepts': [
    { name: 'System Design', category: 'Concepts', logoKey: 'design' },   // generic, no logo in devicon
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' }, // generic
    { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
    { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
    { name: 'Security', category: 'Concepts', logoKey: 'security' }, // generic
    { name: 'Object Oriented Design', category: 'Concepts', logoKey: 'ood' },
    { name: 'Machine Learning', category: 'Concepts', logoKey: 'machine learning' },
  
  ],
  'Tools': [
      { name: 'Git', category: 'Tools', logoKey: 'git' },
      { name: 'Jira', category: 'Tools', logoKey: 'jira' },
      { name: 'Maven', category: 'Tools', logoKey: 'maven' },
      { name: 'SonarQube', category: 'Tools', logoKey: 'sonarqube' },
      { name: 'Jenkins', category: 'Tools', logoKey: 'jenkins' },
      { name: 'GitHub Actions', category: 'Tools', logoKey: 'githubactions' },
      { name: 'JMeter', category: 'Tools', logoKey: 'jmeter' },
      { name: 'NeoLoad', category: 'Tools', logoKey: 'neoload' },
      { name: 'Figma', category: 'Concepts', logoKey: 'figma' }
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};