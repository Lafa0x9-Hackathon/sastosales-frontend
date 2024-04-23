import { Input } from "./Input";
import { cn } from "../../utils/cn";

export const PasswordInput = ({ placeholder, className, id, ...props }) => {
  return (
    <div className="relative">
      <Input
        type="password"
        placeholder={placeholder}
        className={cn("w-full pr-12", className)}
        id={id}
        {...props}
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 right-4 -translate-y-1/2"
      >
        <path
          d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z"
          fill="#9F9F9F"
        />
      </svg>
    </div>
  );
};
