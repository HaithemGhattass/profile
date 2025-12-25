import React from "react";
const ContactCard = ({ email }) => (
  <div className="bg-white rounded-3xl border border-slate-200 p-6 flex items-center justify-between group hover:border-blue-300 transition-colors">
    <div>
      <div className="text-sm font-medium text-slate-900">Contact</div>
      <div className="text-xs text-slate-500 mt-0.5">{email}</div>
    </div>
    <a
      href={`mailto:${email}`}
      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all"
    >
      <span
        className="iconify"
        data-icon="lucide:arrow-up-right"
        data-width="18"
      ></span>
    </a>
  </div>
);
export default ContactCard;