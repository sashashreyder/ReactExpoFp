import React, { useEffect, useState } from 'react';
import './Statistics.css';

function Statistics() {
  const [indoorSpace, setIndoorSpace] = useState(0);
  const [pointsOfInterest, setPointsOfInterest] = useState(0);
  const [monthlyUsers, setMonthlyUsers] = useState(0);

  useEffect(() => {
    animateNumber(setIndoorSpace, 18000000, 2000);
    animateNumber(setPointsOfInterest, 116552, 2000);
    animateNumber(setMonthlyUsers, 107000, 2000);
  }, []);

  const animateNumber = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16); // Assuming 60 FPS
    const animate = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setter(target);
      }
    };
    animate();
  };

  return (
    <div className="statistics-container">
      <div className="stat-item">
        <div className="icon">🗺️</div>
        <h3 className="stat-number">{indoorSpace.toLocaleString()}M</h3>
        <p>Indoor space mapped (m²)</p>
      </div>
      <div className="stat-item">
        <div className="icon">📍</div>
        <h3 className="stat-number">{pointsOfInterest.toLocaleString()}</h3>
        <p>Unique points-of-interest</p>
      </div>
      <div className="stat-item">
        <div className="icon">👥</div>
        <h3 className="stat-number">{monthlyUsers.toLocaleString()}k</h3>
        <p>Monthly users</p>
      </div>
    </div>
  );
}

export default Statistics;


