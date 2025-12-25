
import React from "react";

const Copyright = ({ year, name, technologies }) => (
  <div className="text-sm text-slate-500 font-medium">
    © {year} {name}. Built with{" "}
    {technologies.map((tech, index) => (
      <span key={index}>
        <span className="text-blue-600">{tech}</span>
        {index < technologies.length - 1 && " & "}
      </span>
    ))}
    .
  </div>
);
export default Copyright;