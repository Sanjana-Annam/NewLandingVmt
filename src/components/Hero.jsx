import "./Hero.css";
import LeadForm from "./LeadForm";
import logo from "../assets/vmt-logo.png"; // adjust path if needed

export default function Hero() {
  return (
    <section className="hero">
      {/* LOGO */}
      <img
        src={logo}
        alt="Viral Marketing Trends"
        className="hero-logo"
      />

      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-badge">⚡ Performance-Driven Marketing</span>

          <h1>
            Grow Your Brand With <br />
            <span>Viral Marketing Trends</span>
          </h1>

          <p>
            We help brands scale using paid ads, SEO, and ROI-focused
            performance marketing strategies.
          </p>

          <ul>
            <li>✔ ROI-focused growth</li>
            <li>✔ Full-service digital marketing</li>
            <li>✔ Transparent reporting</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <LeadForm />
      </div>
    </section>
  );
}
