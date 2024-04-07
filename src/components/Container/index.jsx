import { cn } from "../../utils/cn";

const Container = ({ className, children }) => {
  return (
    <div className={cn("max-w-[1140px] mx-auto", className)}>{children}</div>
  );
};

export default Container;
