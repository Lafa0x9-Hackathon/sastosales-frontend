import { cn } from "../../utils/cn";

export const BreadcrumbList = ({ children, className }) => {
  return (
    <ul className={cn(`flex items-center gap-1 text-sm p-2`, className)}>{children}</ul>
  );
};
