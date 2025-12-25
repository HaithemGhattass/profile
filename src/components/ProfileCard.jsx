import React from "react";
const ProfileCard = ({ name, location, bio }) => (
  <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
        <span
          className="iconify text-slate-300"
          data-icon="lucide:user"
          data-width="32"
        ></span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-slate-500 text-sm">{location}</p>
      </div>
    </div>
    {bio.map((paragraph, index) => (
      <p key={index} className={`text-slate-600 leading-relaxed ${index < bio.length - 1 ? 'mb-6' : ''}`}>
        {paragraph}
      </p>
    ))}
  </div>
);
export default ProfileCard;