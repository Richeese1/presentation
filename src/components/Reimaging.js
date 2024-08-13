import React from 'react';
import './ModuleStyles.css'; // Import the updated CSS

const ModuleComponent = () => {
  return (
    <div className="module-container">
      <h1 className="component-title">1. Re-imaging an operating system</h1>
      <div className="description-box">
        <p className="component-description">
          It refers to the process of installing or restoring an OS to a computer or server by using a pre-configured image file. This image file contains a snapshot of the OS along with any installed software, settings, and configurations.
        </p>
      </div>
      <div className="component-images">
        <img src="/Images/Reimage/1.jpg" alt="Image 1" />
        <img src="/Images/Reimage/2.jpg" alt="Image 2" />
        <img src="/Images/Reimage/3.jpg" alt="Image 3" />
        <img src="/Images/Reimage/4.jpg" alt="Image 4" />
        <img src="/Images/Reimage/5.jpg" alt="Image 5" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default ModuleComponent;
