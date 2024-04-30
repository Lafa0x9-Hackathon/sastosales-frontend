import { cn } from "../../utils/cn";

export const BreadcrumbItem = ({ children, className }) => {
  return <li className={cn(className)}>{children}</li>;
};
