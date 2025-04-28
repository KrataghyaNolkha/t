import React from "react";
import "./MarqueeSlider.css";
import heroImage from "./img-1.png.png"; // Import your image

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">
            Secure pharmaceutical supply chains with{" "} authentication
          </h1>
          
          <p className="subtitle">
            From simple verification to complete supply chain transparency, our solutions 
            deliver <span className="emphasis">"Aha!" moments</span> of trust and security when it matters most.
          </p>
          
          <div className="cta-buttons">
            <button className="primary-button pulse-animation">TRY FREE</button>
            <button className="secondary-button">WATCH DEMO <span className="icon">→</span></button>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img 
            src={heroImage} 
            alt="Blockchain drug authentication" 
            className="hero-image"
          />
          <div className="floating-dots"></div>
        </div>
      </div>
      <div className="services-grid">
        {/* Service 1 */}
        <div className="service-card">
          <h2>Drug Authentication</h2>
          <p>
            Verify pharmaceutical products instantly using blockchain-powered 
            verification tools to combat counterfeit drugs.
          </p>
          <a href="#authenticate" className="service-link">Authenticate Now</a>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <h2>Supply Chain Tracking</h2>
          <p>
            Track medications from manufacturer to patient with immutable 
            blockchain records ensuring complete transparency.
          </p>
          <a href="#tracking" className="service-link">Explore Tracking</a>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <h2>Blockchain Platform</h2>
          <p>
            Build secure drug authentication solutions on our tamper-proof 
            blockchain foundation that integrates with existing systems.
          </p>
          <a href="#platform" className="service-link">Learn About Our Platform</a>
        </div>
      </div>

      <div className="trusted-by">
        <p>TRUSTED BY LEADING PHARMACEUTICAL COMPANIES</p>
        {/* Add logos of trusted partners here */}
      </div>
      {/* Rest of your component remains the same */}
    </div>
  );
};

export default ServicesSection;