function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-cinema-600 hover:bg-cinema-700 text-white",

    secondary:
      "bg-white/10 hover:bg-white/20 text-white",

    outline:
      "border border-white/20 hover:bg-white/10 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white"
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        px-5
        py-3
        text-sm
        font-semibold
        transition
        duration-200
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;