import { cn } from "../../utils/cn";

export const inputStyle = "border-[0.8px] rounded-lg py-2.5 text-[14px] text-gray-600 px-4 border-[#646464] outline-none"

export const Input = ({ type, className, placeholder, id, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      className={cn(
        inputStyle,
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
};
