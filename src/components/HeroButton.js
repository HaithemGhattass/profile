const HeroButton = ({
  label,
  icon,
  variant = "primary",
  onClick,
}) => {
  const base =
    "group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-blue-600 hover:scale-[1.02] shadow-lg shadow-blue-500/20",
    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {icon && (
        <span
          className="iconify"
          data-icon={icon}
          data-width="18"
        ></span>
      )}
      {label}
    </button>
  );
};

export default HeroButton;
