import { cn } from "../../utils/cn";

const Label = ({ children, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-[13.25px] text-gray-600 px-1", className)}
    >
      {children}
    </label>
  );
};

export default Label;
