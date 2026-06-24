/*추가적인 스타일은 필요한 시점에 추가*/

const sizeClasses = {
  large: "h-14 px-31 w-full py-4 text-xl font-semibold",
  small: "h-[42px] px-[23px] py-3",
};

const variantClasses = {
  primary: "bg-brand-blue text-white",
  gray: "bg-cool-gray-400 text-cool-gray-100 ",
  white: "bg-white border-cool-gray-300 border ",
};

const roundedClasses = {
  round: "rounded-[40px]",
  // square: ""
};

export default function Button({
  children,
  size = "small",
  variant = "primary",
  rounded = "round",
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${roundedClasses[rounded]} ${className} flex items-center justify-center gap-2.5`}
    >
      {children}
    </button>
  );
}
