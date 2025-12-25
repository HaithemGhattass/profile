import React from "react";
import SocialLink from "../components/SocialLink";
import Copyright from "../components/Copyright";

const SocialLinks = ({ links }) => (
  <div className="flex gap-6">
    {links.map((link, index) => (
      <SocialLink
        key={index}
        href={link.href}
        icon={link.icon}
        label={link.label}
      />
    ))}
  </div>
);


const footerData = {
  year: 2025,
  name: "Haithem Dev",
  technologies: ["Tailwind", "Code"],
  socialLinks: [
    { href: "#", icon: "lucide:twitter", label: "Twitter" },
    { href: "#", icon: "lucide:linkedin", label: "LinkedIn" },
    { href: "#", icon: "lucide:github", label: "GitHub" },
  ],
};

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <Copyright
        year={footerData.year}
        name={footerData.name}
        technologies={footerData.technologies}
      />
      <SocialLinks links={footerData.socialLinks} />
    </footer>
  );
};

export default Footer