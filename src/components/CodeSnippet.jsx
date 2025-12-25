import React from "react";
const CodeSnippet = () => (
  <div className="bg-blue-800/50 rounded-lg p-3 font-mono text-xs text-blue-100 border border-blue-500/30">
    <div className="flex gap-2">
      <span className="text-blue-300">const</span>
      <span className="text-white">dev</span>
      <span className="text-blue-300">=</span>
      <span className="text-white">{"{"}</span>
    </div>
    <div className="pl-4">
      level: <span className="text-green-300">'Senior'</span>,
    </div>
    <div className="pl-4">
      passion: <span className="text-green-300">true</span>
    </div>
    <div>
      <span className="text-white">{"}"}</span>;
    </div>
  </div>
);
export default CodeSnippet;