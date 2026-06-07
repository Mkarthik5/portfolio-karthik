import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const greetings = [
  { text: "Hello! I'm", lang: "English" },
  { text: "Hola! Soy", lang: "Spanish" },
  { text: "నమస్కారం! నా పేరు", lang: "Telugu" },
  { text: "Bonjour! Je suis", lang: "French" },
  { text: "नमस्ते! मैं हूँ", lang: "Hindi" },
];

const Landing = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="open-to-work">
              <span className="otw-dot"></span>
              Open to Work &amp; Relocation
            </div>
            <div className="greeting-wrapper">
              <h2
                className={`greeting-text ${visible ? "greeting-visible" : "greeting-hidden"}`}
              >
                {greetings[index].text}
              </h2>
            </div>
            <h1>
              BALA KARTHIK REDDY
              <br />
              <span>MARAMREDDY</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
