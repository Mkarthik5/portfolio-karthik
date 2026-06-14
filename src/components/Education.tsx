import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Education = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("edu-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".edu-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".edu-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "education",
      },
    });

    timeline.to(".edu-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("education")?.kill();
    };
  }, []);

  return (
    <div className="work-section edu-section" id="education">
      <div className="work-container edu-container section-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="work-flex edu-flex">
          <div className="work-box edu-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Bachelor of Engineering</h4>
                  <p>Computer Science & Engineering</p>
                </div>
              </div>
              <h4>Institute of Aeronautical Engineering</h4>
              <p>GPA: 3.23 / 4.0 &nbsp;|&nbsp; 2018 – 2022</p>
              <p style={{ marginTop: "8px" }}>
                Data Structures, E-Commerce, Web Technologies,
                Cloud Application Development
              </p>
            </div>
            <WorkImage image="/images/Iare_logo.webp" alt="Institute of Aeronautical Engineering" />
          </div>
          <div className="work-box edu-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Master of Science</h4>
                  <p>Computer Science</p>
                </div>
              </div>
              <h4>Rowan University</h4>
              <p>GPA: 3.63 / 4.0 &nbsp;|&nbsp; 2022 – 2024</p>
              <p style={{ marginTop: "8px" }}>
                Advanced Design & Algorithms, Advanced Database, Network Security,
                Functional Programming
              </p>
            </div>
            <WorkImage image="/images/rowan_logo.png" alt="Rowan University" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
