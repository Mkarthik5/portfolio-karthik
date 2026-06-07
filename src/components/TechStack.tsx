import "./styles/TechStack.css";

const groupedCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Angular", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Vue.js", "jQuery", "D3.js", "HTML5 / CSS3"],
  },
  {
    title: "Backend & APIs",
    skills: ["Java", "Spring Boot", "Spring MVC", "C# / ASP.NET Core", "Entity Framework Core", "Node.js", "Express.js", "PHP / Laravel", "REST", "SOAP", "GraphQL", "Hibernate", "Flask", "Django"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Lambda, IAM)", "Azure App Services", "Azure DevOps", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS CodePipeline", "CI/CD"],
  },
];

const flipCategories = [
  {
    title: "Languages",
    icon: "</>",
    skills: ["Java", "C#", "Python", "PHP", "JavaScript", "TypeScript", "SQL", "Bash", "HTML5", "CSS3"],
  },
  {
    title: "Tools & Platforms",
    icon: "⚙",
    skills: ["Git / GitHub", "Postman", "Figma", "Firebase", "Jira", "ClickUp", "ServiceNow", "IntelliJ IDEA", "VS Code", "Maven", "DBeaver"],
  },
  {
    title: "Testing & QA",
    icon: "✓",
    skills: ["JUnit", "NUnit", "Jest", "Unit Testing", "Code Review", "Pair Programming", "Bug Tracking"],
  },
  {
    title: "Healthcare & Standards",
    icon: "+",
    skills: ["HL7", "FHIR", "HIPAA Compliance", "ASP.NET Identity", "Role-Based Access Control", "Audit Logging", "Field-Level Encryption"],
  },
  {
    title: "Messaging & Caching",
    icon: "⟳",
    skills: ["Kafka", "Redis", "Event-Driven Architecture", "API Gateway", "Webhook Automation"],
  },
  {
    title: "AI & Modern Tools",
    icon: "✦",
    skills: ["LLM Integration", "AI Agents", "GitHub Copilot", "ChatGPT", "Claude Sonnet", "Prompt Engineering", "Generative AI"],
  },
  {
    title: "Architecture & Practices",
    icon: "◈",
    skills: ["Microservices", "System Design", "OOP", "SOLID Principles", "Design Patterns", "Agile / Scrum", "Multi-tenant Architecture"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section">
      <h2 className="techstack-title">My Techstack</h2>

      {/* Grouped Category Cards */}
      <div className="grouped-grid">
        {groupedCategories.map((cat) => (
          <div className="grouped-card" key={cat.title}>
            <h4>{cat.title}</h4>
            <div className="grouped-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="grouped-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Flip Cards */}
      <div className="flip-grid">
        {flipCategories.map((cat) => (
          <div className="flip-card" key={cat.title}>
            <div className="flip-inner">
              <div className="flip-front">
                <span className="flip-icon">{cat.icon}</span>
                <h4>{cat.title}</h4>
              </div>
              <div className="flip-back">
                <h4>{cat.title}</h4>
                <ul>
                  {cat.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
