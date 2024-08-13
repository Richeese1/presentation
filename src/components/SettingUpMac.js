import React from 'react';
import './ModuleStyles.css'; // Import the CSS file

const SettingUpMac = () => {
  return (
    <div className="module-container">
      <h1 className="component-title">16. Setting Up Mac</h1>
      <div className="description-box">
        <p className="component-description">
          Setting up a Mac involves several key steps, including reimaging (if needed), installing applications, and configuring system settings.
        </p>
      </div>
      <div className="component-images">
        <img src="/Images/Avalon/1.jpg" alt="Image 1" />
        <img src="/Images/Avalon/2.jpg" alt="Image 2" />
        <img src="/Images/Avalon/3.jpg" alt="Image 3" />
        <img src="/Images/Avalon/4.jpg" alt="Image 4" />
        <img src="/Images/Avalon/5.jpg" alt="Image 5" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default SettingUpMac;
