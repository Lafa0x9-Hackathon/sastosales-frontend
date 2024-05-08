import { cn } from "../../utils/cn";

export const Map = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 37 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-black", className)}
    >
      <path d="M23.6609 4.75L12.4109 0.25L0.0358887 4.75V31.75L12.4109 27.25L23.6609 31.75L36.0359 27.25V0.25L23.6609 4.75ZM13.5359 3.12325L22.5359 6.72325V28.8767L13.5359 25.2768V3.12325ZM2.28589 6.325L11.2859 3.05125V25.2632L2.28589 28.5348V6.32275V6.325ZM33.7859 25.675L24.7859 28.9488V6.73675L33.7859 3.463V25.675Z" />
    </svg>
  );
};
