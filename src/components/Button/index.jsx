import { cn } from "../../utils/cn";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center gap-2 font-roboto text-[#F8F8F8] py-3 px-7 bg-[#816FB5] rounded-[4px] md:text-[15px] text-[14px] font-medium",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
