import React from 'react';
import './Features.css';
import NavBar from "../NavBar/NavBar";
const features = [
  {
    title: "Seamless Streaming",
    description: "Enjoy uninterrupted, high-quality music streaming tailored to your taste.",
    icon: "🎵",
  },
  {
    title: "Personalized Playlists",
    description: "Smart AI recommends and curates playlists based on your mood and listening habits.",
    icon: "🎶",
  },
  {
    title: "Discover New Artists",
    description: "Explore emerging talents and underground music scenes you won’t find elsewhere.",
    icon: "🎤",
  },
];

const benefits = [
  { icon: "🚀", title: "Fast Performance", text: "Optimized for speed and low latency." },
  { icon: "🔒", title: "Secure", text: "Built with privacy and security as top priorities." },
  { icon: "🌐", title: "Global Access", text: "Available anytime, anywhere." },
];

const testimonials = [
  { name: "Alice", feedback: "Absolutely love the curated playlists!" },
  { name: "Ben", feedback: "The discovery feature introduced me to amazing artists." },
  { name: "Clara", feedback: "Streaming quality is top-notch!" },
];

function Features() {
  return (<div className="Main">
    <NavBar className="navBar"></NavBar>
    <div className="features-wrapper " style={{ marginLeft: "260px" }}>

      {/* Features */}
      <section className="features-section" aria-label="Feature highlights">
        <h2 className="small-heading">Features</h2>
        <h1 className="main-heading">Our Features & Services</h1>
        <div className="features-grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button className="feature-button">Learn More</button>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="benefits-section">
        <h2 className="main-heading">Why Choose Us?</h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="main-heading">What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimony, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">“{testimony.feedback}”</p>
              <p className="testimonial-author">- {testimony.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-heading">Ready to Experience Seamless Music?</h2>
        <p>Join thousands of happy listeners today.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
    </div>
  );
}

export default Features;
