import React from "react";
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-slate-400 hover:text-slate-900 transition-colors"
  >
    <span className="iconify" data-icon={icon} data-width="20"></span>
  </a>
);
export default SocialLink;