import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css'; // Import the CSS for styling

const SideNavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Update the array with numbers
  const menuItems = [
    { number: '1', path: '/reimaging' },
    { number: '2', path: '/installing-software' },
    { number: '3', path: '/patching-hub' },
    { number: '4', path: '/creating-logins' },
    { number: '5', path: '/cable-management' },
    { number: '6', path: '/kill-disk' },
    { number: '7', path: '/ticketing' },
    { number: '8', path: '/replacing-system-parts' },
    { number: '9', path: '/sorting-testing' },
    { number: '10', path: '/crimping' },
    { number: '11', path: '/wall-to-wall' },
    { number: '12', path: '/reboot' },
    { number: '13', path: '/network-file' },
    { number: '14', path: '/sccm' },
    { number: '15', path: '/active-directory' },
    { number: '16', path: '/setting-up-mac' },
    {number:  '17' , path: '/storage' },
    {number:  '18' , path: '/removing-parts' },
  ];

  return (
    <div
      className={`sidenav-container ${isHovered ? 'show' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="circle-button-container">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className="circle-button">
            {item.number} {/* Display the number */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
