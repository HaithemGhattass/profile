const HeroDescription = ({ text }) => {
  return (
    <p className="text-lg md:text-xl text-slate-500 max-w-xl text-balance mb-10 leading-relaxed animate-fade-up delay-200">
      {text}
    </p>
  );
};

export default HeroDescription;
