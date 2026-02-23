import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    items: [
      { name: "Next.js", level: "strong" },
      { name: "React", level: "strong" },
      { name: "TypeScript", level: "strong" },
      { name: "TailwindCSS", level: "strong" },
      { name: "Framer Motion", level: "good" },
      { name: "HTML/CSS", level: "strong" }
    ]
  },
  {
    category: "backend",
    items: [
      { name: "Python", level: "strong" },
      { name: "FastAPI", level: "good" },
      { name: "Node.js", level: "strong" },
      { name: "Express", level: "strong" },
      { name: "PHP", level: "strong" },
      { name: "REST APIs", level: "strong" },
      { name: "JWT/Auth", level: "good" },
      { name: "Role-based Access", level: "strong" }
    ]
  },
  {
    category: "database",
    items: [
      { name: "MySQL", level: "strong" },
      { name: "PostgreSQL", level: "strong" },
      { name: "Stored Procedures", level: "strong" },
      { name: "Query Optimization", level: "good" },
      { name: "Database Design", level: "strong" }
    ]
  },
  {
    category: "cloudDevops",
    items: [
      { name: "AWS S3", level: "good" },
      { name: "Linux VPS", level: "good" },
      { name: "Docker", level: "good" },
      { name: "CI/CD", level: "learning" },
      { name: "Nginx", level: "good" }
    ]
  },
  {
    category: "toolsUi",
    items: [
      { name: "scikit-learn", level: "good" },
      { name: "TensorFlow / PyTorch", level: "learning" },
      { name: "Pandas", level: "good" },
      { name: "Figma", level: "good" },
      { name: "Git/GitHub", level: "strong" },
      { name: "Postman", level: "strong" },
      { name: "Flutter", level: "good" },
      { name: "Print Template Design", level: "strong" }
    ]
  }
];
