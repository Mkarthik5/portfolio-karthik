import { MdArrowOutward } from "react-icons/md";
import "./styles/Projects.css";

const projects = [
  {
    number: "01",
    name: "E-Wallet Express",
    tagline: "Microservices-based Digital Wallet Platform",
    description:
      "A production-grade e-wallet system built with a microservices architecture. Engineered for high throughput using Kafka for async event streaming and Redis for low-latency caching. Secured with JWT authentication and packaged in Docker containers for seamless deployment and scalability.",
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "Docker", "JWT", "Microservices"],
    link: "https://github.com/Mkarthik5/E-Wallet-Express",
  },
  {
    number: "02",
    name: "WatchWave",
    tagline: "AI-Powered Streaming & Movie Recommendation App",
    description:
      "A React-based streaming application integrating OpenAI's API to deliver intelligent, personalized movie recommendations. Built with Firebase for real-time data and authentication, Redux for global state management, and TMDB API for a rich movie database — delivering a seamless, Netflix-inspired user experience.",
    tags: ["React", "OpenAI API", "Firebase", "Redux", "TMDB API", "JavaScript"],
    link: "https://github.com/Mkarthik5/WatchWave",
  },
  {
    number: "03",
    name: "Career Connect",
    tagline: "Full Stack MERN Job Portal",
    description:
      "A full-featured job portal connecting recruiters and applicants built on the MERN stack. Recruiters can post, manage, and track job listings while applicants can search with fuzzy filtering, apply, track application status, and rate employers. Secured with JWT authentication and designed for real-world hiring workflows.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    link: "https://github.com/Mkarthik5/Career-Connect",
  },
  {
    number: "04",
    name: "CinemaSuggest",
    tagline: "ML-Based Movie Recommendation Engine",
    description:
      "A machine learning recommendation system that analyzes movie metadata, genre patterns, and user preferences to surface highly relevant film suggestions. Built using collaborative and content-based filtering techniques in Python, demonstrating applied ML skills beyond the web stack.",
    tags: ["Python", "Machine Learning", "Jupyter Notebook", "Pandas", "Scikit-learn"],
    link: "https://github.com/Mkarthik5/CinemaSuggest1",
  },
];

const Projects = () => {
  return (
    <div className="projects-section section-container" id="projects">
      <div className="projects-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.number}
              className="project-card"
              href={project.link}
              target="_blank"
              data-cursor="disable"
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <MdArrowOutward className="project-arrow" />
              </div>
              <h3>{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
