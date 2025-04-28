import React, { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // Marquee images data
  const features = [
    { image: 'blockchain.jpg', title: 'Blockchain Security' },
    { image: 'verification.jpg', title: 'Instant Verification' },
    { image: 'global.jpg', title: 'Global Network' },
    { image: 'analytics.jpg', title: 'Real-time Analytics' },
    { image: 'fraud.jpg', title: 'Fraud Prevention' },
  ];

  const duplicatedImages = [...features, ...features];

  return (
    <section className="about-section-marquee">
      <div className="about-container-marquee">
        <div className="about-content-marquee">
          <h1 className="section-title-marquee">About CarePulse</h1>
          <p className="section-subtitle-marquee">
            Revolutionizing medication safety through blockchain technology
          </p>

          <div className="tab-buttons-marquee">
            <button
              className={`tab-btn-marquee ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button
              className={`tab-btn-marquee ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button
              className={`tab-btn-marquee ${activeTab === 'technology' ? 'active' : ''}`}
              onClick={() => setActiveTab('technology')}
            >
              Our Technology
            </button>
          </div>

          <div className="tab-content-marquee">
            {activeTab === 'mission' && (
              <div className="tab-panel">
                <p>
                  We're dedicated to eliminating counterfeit medications through our 
                  blockchain-powered verification system that creates an immutable 
                  record of every drug's journey from manufacturer to patient.
                </p>
                <ul className="features-list-marquee">
                  <li className="checked-marquee">Secure pharmaceutical supply chains</li>
                  <li className="checked-marquee">Instant medication authentication</li>
                  <li className="checked-marquee">Global regulatory compliance</li>
                </ul>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="tab-panel">
                <p>
                  We envision a world where counterfeit drugs are eradicated through 
                  transparent verification, protecting 1 billion patients annually by 2030.
                </p>
                <ul className="features-list-marquee">
                  <li className="checked-marquee">Universal manufacturer adoption</li>
                  <li className="checked-marquee">Healthcare system integration</li>
                  <li className="checked-marquee">AI-powered monitoring</li>
                </ul>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="tab-panel">
                <p>
                  Our proprietary blockchain technology provides decentralized, 
                  tamper-proof verification that's faster and more secure than 
                  traditional methods.
                </p>
                <ul className="features-list-marquee">
                  <li className="checked-marquee">Distributed ledger architecture</li>
                  <li className="checked-marquee">Cryptographic identifiers</li>
                  <li className="checked-marquee">Real-time verification API</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Vertical Marquee Slider */}
        <div className="marquee-container-marquee">
          <div className="marquee-columns-marquee">
            <div className="marquee-col-marquee">
              <div className="marquee-track-marquee" style={{ '--duration': '40s' }}>
                {duplicatedImages.map((item, index) => (
                  <div className="marquee-card-marquee" key={`col1-${index}`}>
                    <img src={`/images/${item.image}`} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-col-marquee">
              <div className="marquee-track-marquee" style={{ '--duration': '40s', '--delay': '-20s' }}>
                {duplicatedImages.map((item, index) => (
                  <div className="marquee-card-marquee" key={`col2-${index}`}>
                    <img src={`/images/${item.image}`} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-col-marquee">
              <div className="marquee-track-marquee" style={{ '--duration': '40s', '--delay': '-30s' }}>
                {duplicatedImages.map((item, index) => (
                  <div className="marquee-card-marquee" key={`col3-${index}`}>
                    <img src={`/images/${item.image}`} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;