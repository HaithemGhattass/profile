import React from "react";
import ProfileCard from "../components/ProfileCard";
import ExperienceCard from "../components/ExperienceCard";
import ContactCard from "../components/ContactCard";
const About = () => {
  const profileData = {
    name: "Haithem Developer",
    location: "Tunisia, TN",
    bio: [
      "I have over 5 years of experience building digital products. My journey started with a love for design, which naturally evolved into fullstack engineering. I believe the best applications are those that feel invisible—where the user interface anticipates needs before they arise.",
      "Currently, I'm focused on building accessible, high-performance web applications using the modern React ecosystem. When I'm not coding, you can find me hiking or contributing to open source."
    ],
    email: "haithemghattas@gmail.com"
  };

  return (
    <section id="about" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard
          name={profileData.name}
          location={profileData.location}
          bio={profileData.bio}
        />

        <div className="space-y-6">
          <ExperienceCard />
          <ContactCard email={profileData.email} />
        </div>
      </div>
    </section>
  );
};
export default About;
