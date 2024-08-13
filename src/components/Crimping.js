import React from 'react';

const Crimping = () => {
  return (
    <div className="module-container">
      <h1 className="component-title">10. Crimping LAN</h1>
      <div className="description-box">
        <p className="component-description">
        Crimping a LAN cable involves attaching connectors (usually RJ45 connectors) to the ends of an Ethernet cable, allowing it to connect to network devices such as computers, switches, or routers. 
        </p>
      </div>
      <div className="component-images">
        <img src="/Images/Crimping/1.jpg" alt="Image 1" />
        <img src="/Images/Crimping/2.jpg" alt="Image 2" />
        <img src="/Images/Crimping/3.jpg" alt="Image 3" />
        <img src="/Images/Crimping/4.jpg" alt="Image 4" />
        <img src="/Images/Crimping/5.jpg" alt="Image 5" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Crimping;
