import React from 'react';

const ReplacingSysParts = () => {
  return (
    <div className="module-container">
      <h1 className="component-title">8. Replacing system parts like HDD/SSD/RAM</h1>
      <div className="description-box">
        <p className="component-description">
          Replacing hardware components like HDDs, SSDs, and RAM is a common task when upgrading or repairing a computer.
        </p>
      </div>
      <div className="component-images">
        <img src="/Images/Replacing/1.jpg" alt="Image 1" />
        <img src="/Images/Replacing/2.jpg" alt="Image 2" />
        <img src="/Images/Replacing/3.jpg" alt="Image 3" />
        <img src="/Images/Replacing/4.jpg" alt="Image 4" />
        <img src="/Images/Replacing/5.jpg" alt="Image 5" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default ReplacingSysParts;
