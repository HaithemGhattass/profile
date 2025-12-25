import StatusBadge from "../components/StatusBadge";
import HeroTitle from "../components/HeroTitle";
import HeroDescription from "../components/HeroDescription";
import HeroButton from "../components/HeroButton";

const Hero = ({ onViewWork }) => {
  return (
    <section className="flex flex-col items-center text-center mb-32">
      <StatusBadge text="Available for new projects" />

      <HeroTitle
        title="Crafting digital"
        highlighted="perfection."
      />

      <HeroDescription
        text="I'm a Fullstack Engineer obsessed with micro-interactions, clean architecture, and pixel-perfect implementation."
      />

      <div className="flex gap-4 animate-fade-up delay-300">
        <HeroButton
          label="View Work"
          icon="lucide:arrow-down"
          variant="primary"
          onClick={onViewWork}
        />
        <HeroButton
          label="GitHub"
          icon="lucide:github"
          variant="secondary"
        />
      </div>
    </section>
  );
};

export default Hero;
