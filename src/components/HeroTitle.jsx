const HeroTitle = ({ title, highlighted }) => {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl text-balance animate-fade-up delay-100">
      {title}
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
        {highlighted}
      </span>
    </h1>
  );
};

export default HeroTitle;
