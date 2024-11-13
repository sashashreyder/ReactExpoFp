import React, { useState } from 'react';
import './PricingSection.css';

function PricingSection() {
  const [showInfo, setShowInfo] = useState({
    basic: false,
    premium: false,
    pro: false,
  });

  const toggleInfo = (plan) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [plan]: !prevState[plan],
    }));
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-card basic">
        <h3>Basic Plan</h3>
        <p className="price">$29/month</p>
        <ul className="features-list">
          <li>Access to basic maps</li>
          <li>Navigation assistance</li>
          <li>Basic customer support</li>
        </ul>
        <button className="info-btn" onClick={() => toggleInfo('basic')}>
          {showInfo.basic ? 'Less Info' : 'More Info'}
        </button>
        <div className={`more-info ${showInfo.basic ? 'visible' : ''}`}>
          <p>Ideal for small events looking for simple navigation solutions.</p>
        </div>
      </div>

      <div className="featured">
        <h3>Premium Plan</h3>
        <p className="price">$59/month</p>
        <ul className="features-list">
          <li>Enhanced map access</li>
          <li>Priority navigation assistance</li>
          <li>Premium customer support</li>
          <li>Custom branding options</li>
        </ul>
        <button className="info-btn" onClick={() => toggleInfo('premium')}>
          {showInfo.premium ? 'Less Info' : 'More Info'}
        </button>
        <div className={`more-info ${showInfo.premium ? 'visible' : ''}`}>
          <p>Best for medium to large events that need enhanced support and branding.</p>
        </div>
      </div>

      <div className="pricing-card pro">
        <h3>Pro Plan</h3>
        <p className="price">$99/month</p>
        <ul className="features-list">
          <li>All-access maps</li>
          <li>Dedicated support manager</li>
          <li>Advanced analytics</li>
          <li>Complete branding customization</li>
        </ul>
        <button className="info-btn" onClick={() => toggleInfo('pro')}>
          {showInfo.pro ? 'Less Info' : 'More Info'}
        </button>
        <div className={`more-info ${showInfo.pro ? 'visible' : ''}`}>
          <p>For large-scale events needing comprehensive support and customization.</p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;


