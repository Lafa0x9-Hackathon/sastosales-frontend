import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "../../utils/cn";
import { inputStyle } from "./Input";

export const PhoneNumberInput = ({ className, id, placeholder, onChange, ...props }) => {
  return (
    <PhoneInput
    defaultCountry="NP"
      className={cn(inputStyle, className)}
      id={id}
      placeholder={placeholder}
      {...props}
      onChange={onChange}
    />
  );
};
