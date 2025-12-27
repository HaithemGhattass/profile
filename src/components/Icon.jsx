import React from "react";
const Icon = ({ icon, width = "20", className = "" }) => {
  // Check if it's a custom image (contains . or /)
  if (icon && (icon.includes('.') || icon.includes('/'))) {
    return (
      <img 
        src={icon} 
        alt="" 
        width={width} 
        height={width}
        className={className}
      />
    );
  }
  return (
    <span
      className={`iconify ${className}`}
      data-icon={icon}
      data-width={width}
    ></span>
  );
};
export default Icon;
