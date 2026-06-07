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
              Working across TOGa platforms (TOGa Desk, TOGa Commerce, TOGa View, TOGa IQ) as a backend-focused
              Full Stack Developer. Integrated Talos AI bot reducing manual contact-center effort by 30%, scaled
              React services for 85,000+ users improving responsiveness by 20%, and reduced incident resolution
              time by 35% through production support and CI/CD improvements on AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <a className="career-company" href="https://www.linkedin.com/company/docubyte-software-solutions-pvt-ltd/posts/?feedView=all" target="_blank" data-cursor="disable">
                  <img src="/images/docubyes_logo.png" alt="Docubyte" className="company-logo" />
                  <h5>Docubyte Software Solutions, India</h5>
                </a>
              </div>
              <h3>2020 – 2022</h3>
            </div>
            <p>
              Contributed to MedPlusMart, India's largest e-pharmacy serving 3,50,000+ daily customers, building
              backend microservices in Java, Spring Boot, and C# ASP.NET Core powering prescription management,
              order processing, diagnostics booking, and rewards redemption. Built HL7/FHIR-compliant health
              record APIs, implemented HIPAA-aligned security with role-based access control and field-level
              encryption, and deployed microservices on Azure App Services with Azure DevOps CI/CD pipelines
              across 300+ cities in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
