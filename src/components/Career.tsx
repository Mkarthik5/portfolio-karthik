import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <a className="career-company" href="https://www.linkedin.com/company/toga-tech/posts/?feedView=all" target="_blank" data-cursor="disable">
                  <img src="/images/toga_tech_logo.jpeg" alt="Toga Technology" className="company-logo" />
                  <h5>Toga Technology, USA</h5>
                </a>
              </div>
              <h3>2025 – NOW</h3>
            </div>
            <p>
              Working across TOGa platforms (Retail, Desk, View, IQ, Commerce, Supply, Hub) as a Full Stack Developer.
              Designed persona-based access control for TOGa Commerce using React, TypeScript, PHP, and Node.js across
              8+ roles and 20+ personas serving 85,000+ daily users. Implemented Talos, an internal LLM-powered AI
              agent using Python, FastAPI, and Claude LLMs with a RAG pipeline and document ingestion for company policy
              and HR documentation, achieving 80% response accuracy and reducing manual contact-center effort by 30%.
              Developed and maintained Freshservice and TOGa Desk integrations using REST, SOAP, and GraphQL APIs with
              webhook-driven event processing. Contributed to scaling React frontend for TOGa Commerce, improving
              application responsiveness by 20%. Built a multi-language switcher using React and i18n supporting 5
              languages, designed 20+ automated client reports via cron schedules and Event-Driven Architecture, led
              10+ client onboardings in TOGa View with multi-tenant architecture, and reduced incident resolution time
              by 35% through Bash scripting, log analysis on Linux EC2, and CI/CD improvements via GitHub Actions and
              AWS CodePipeline.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Research Assistant</h4>
                <a className="career-company" href="https://www.linkedin.com/school/rowanuniversity/" target="_blank" data-cursor="disable">
                  <img src="/images/rowan_logo.png" alt="Rowan University" className="company-logo" />
                  <h5>Rowan University, USA</h5>
                </a>
              </div>
              <h3>2024 – 2025</h3>
            </div>
            <p>
              Designed and developed an automated exam evaluation workflow using Python, FastAPI, MongoDB, and AWS,
              reducing manual grading effort for professors and supporting assessment workflows for 1,000+ students
              per semester. Built scalable REST APIs using FastAPI for student submissions and grading pipelines,
              containerized components using Docker for reproducible deployments, optimized MongoDB data models for
              high-volume academic records, and deployed on AWS leveraging EC2 and S3 for scalable, secure access
              to grading services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <a className="career-company" href="https://www.linkedin.com/company/docubyte-software-solutions-pvt-ltd/posts/?feedView=all" target="_blank" data-cursor="disable">
                  <img src="/images/docubyes_logo.png" alt="Docubyte" className="company-logo" />
                  <h5>Docubyte Software Solutions, India</h5>
                </a>
              </div>
              <h3>2020 – 2022</h3>
            </div>
            <p>
              Contributed to MedPlusMart, India's largest e-pharmacy serving 350,000+ daily customers, building
              Microservices in Java, Spring Boot, and ASP.NET Core powering prescription upload and verification,
              click-and-pick order management, home delivery scheduling, and pharmacist authorization flows, with
              Angular and TypeScript admin dashboards. Built HL7/FHIR APIs for secure healthcare data exchange,
              implemented HIPAA-aligned security with RBAC, field-level encryption, OAuth 2.0 and JWT, and wrote
              automated tests using JUnit and NUnit. Optimized SQL Server and PostgreSQL schemas for 1,500+ pharmacy
              stores covering inventory sync, order tracking, billing, and MedPlus Payback Points rewards processing.
              Deployed across 6 environments (Alpha, Beta, Gamma, Production, Client Sandbox, Dev Sandbox) on Azure
              App Services with Azure DevOps CI/CD pipelines using Bitbucket, serving 300+ cities in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
