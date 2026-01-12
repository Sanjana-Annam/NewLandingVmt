import React from "react";
import "./About.css";
import founder from "../assets/founder.jpg";

export default function About(){
  return (
    <section className="about">
      <div className="container about-grid">
        <div className="about-media">
          <img src={founder} alt="Founder" className="founder-img" />
          <div className="accent-line" />
        </div>

        <div className="about-content">
          <div className="kicker">Viral Marketing Trends</div>
          <h2>About Us</h2>

          <p>
            Viral Marketing Trends is a Pune-based reliable digital marketing agency offering a full suite
            of services including content creation, website design, social media campaigns, and professional
            video production. Our capabilities extend across campaign strategy, influencer collaborations,
            UI/UX design, search engine optimisation (SEO), search engine marketing (SEM), CRM integration,
            e-commerce optimisation, email marketing, media planning, and performance marketing.
          </p>

          <p>
            We work closely with brands and organisations to plan, manage, and optimise digital campaigns
            that combine creative storytelling with strong analytical insights. Our team of strategists,
            designers, and technical experts focuses on user experience, high-quality content, and clear
            performance outcomes. Every campaign is built on a foundation of research, innovation, and
            audience understanding, ensuring your brand communicates effectively and consistently across platforms.
          </p>

          <p>
            To maintain industry-leading standards, we follow best practices and learning frameworks
            recommended by Google Digital Garage, one of the world's most trusted platforms for digital
            marketing and professional training. This ensures our approach remains modern, ethical, and aligned
            with evolving global digital trends.
          </p>

          <div className="about-footer">
            <a
              className="btn-cta"
              href="https://viralmarketingtrends.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
