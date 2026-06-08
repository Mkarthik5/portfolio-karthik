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
              Designed persona-based access control for TOGa Commerce across 8+ roles and 20+ personas serving 85,000+ users.
              Integrated Talos, an internal LLM-powered AI agent, reducing manual contact-center effort by 30%.
              Built a multi-language switcher using React and i18n supporting 5 languages. Designed 20+ automated
              client reports via cron schedules, led 7+ client onboardings in TOGa View with multi-tenant architecture,
              integrated NetSuite order workflows, and reduced incident resolution time by 35% through Bash scripting,
              log analysis on Linux EC2, and CI/CD improvements using GitHub Actions and AWS CodePipeline.
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
              backend microservices in Java, Spring Boot, and C# ASP.NET Core powering prescription management,
              order processing, diagnostics booking, and rewards redemption. Built HL7/FHIR-compliant health
              record APIs enabling 80,000+ patients to access medical records via a Vue.js patient portal.
              Implemented HIPAA-aligned security with RBAC, field-level encryption, OAuth 2.0 and JWT.
              Optimized SQL Server and PostgreSQL schemas for 1,500+ pharmacy stores, and deployed across
              6 environments on Azure App Services with Azure DevOps CI/CD serving 300+ cities in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
