import { useEffect, useRef } from "react";
import "./styles/Stats.css";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 85, suffix: "K+", label: "Users Served" },
  { value: 30, suffix: "%", label: "Effort Reduced" },
  { value: 35, suffix: "%", label: "Faster Resolution" },
];

const Stats = () => {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    countersRef.current.forEach((el, i) => {
      if (!el) return;
      const target = stats[i].value;
      let started = false;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            started = true;
            let start = 0;
            const duration = 1800;
            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target).toString();
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target.toString();
            };
            requestAnimationFrame(step);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="stats-section section-container">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-box" key={i}>
            <h2>
              <span ref={(el) => (countersRef.current[i] = el)}>0</span>
              {stat.suffix}
            </h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
