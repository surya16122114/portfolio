export type SkillCategory =
  | 'Languages'
  | 'Software Development'
  | 'AI & ML'
  | 'Databases & Messaging'
  | 'Cloud & DevOps';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the devicon CDN URL (falls back to a glyph)
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'C', category: 'Languages', logoKey: 'c' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'SQL', category: 'Languages', logoKey: 'sql' },
  ],
  'Software Development': [
    { name: 'Spring Boot', category: 'Software Development', logoKey: 'spring' },
    { name: 'Node.js', category: 'Software Development', logoKey: 'nodejs' },
    { name: 'Express', category: 'Software Development', logoKey: 'express' },
    { name: 'React', category: 'Software Development', logoKey: 'react' },
    { name: 'Angular', category: 'Software Development', logoKey: 'angularjs' },
    { name: 'Redux', category: 'Software Development', logoKey: 'redux' },
    { name: 'Next.js', category: 'Software Development', logoKey: 'nextjs' },
    { name: 'HTML', category: 'Software Development', logoKey: 'html5' },
    { name: 'CSS', category: 'Software Development', logoKey: 'css3' },
    { name: 'REST', category: 'Software Development', logoKey: 'rest' },
    { name: 'GraphQL', category: 'Software Development', logoKey: 'graphql' },
  ],
  'AI & ML': [
    { name: 'RAG', category: 'AI & ML', logoKey: 'rag' },
    { name: 'LLMs', category: 'AI & ML', logoKey: 'llm' },
    { name: 'Agentic AI', category: 'AI & ML', logoKey: 'agentic' },
    { name: 'LangChain', category: 'AI & ML', logoKey: 'langchain' },
    { name: 'LangGraph', category: 'AI & ML', logoKey: 'langgraph' },
    { name: 'Transformers', category: 'AI & ML', logoKey: 'transformers' },
    { name: 'Fine-Tuning', category: 'AI & ML', logoKey: 'finetune' },
    { name: 'NLP', category: 'AI & ML', logoKey: 'nlp' },
  ],
  'Databases & Messaging': [
    { name: 'PostgreSQL', category: 'Databases & Messaging', logoKey: 'postgresql' },
    { name: 'MySQL', category: 'Databases & Messaging', logoKey: 'mysql' },
    { name: 'MongoDB', category: 'Databases & Messaging', logoKey: 'mongodb' },
    { name: 'ChromaDB', category: 'Databases & Messaging', logoKey: 'chromadb' },
    { name: 'Redis', category: 'Databases & Messaging', logoKey: 'redis' },
    { name: 'Apache Kafka', category: 'Databases & Messaging', logoKey: 'apachekafka' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', category: 'Cloud & DevOps', logoKey: 'amazonwebservices' },
    { name: 'GCP', category: 'Cloud & DevOps', logoKey: 'googlecloud' },
    { name: 'Docker', category: 'Cloud & DevOps', logoKey: 'docker' },
    { name: 'Kubernetes', category: 'Cloud & DevOps', logoKey: 'kubernetes' },
    { name: 'Terraform', category: 'Cloud & DevOps', logoKey: 'terraform' },
    { name: 'GitHub Actions', category: 'Cloud & DevOps', logoKey: 'githubactions' },
    { name: 'CI/CD', category: 'Cloud & DevOps', logoKey: 'cicd' },
  ],
};

// Helper functions
export const getAllSkills = () => Object.values(skills).flat();
export const getCategories = () => Object.keys(skills) as SkillCategory[];
