import { cn } from "../../utils/cn";

export const Timer = ({className}) => {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_985_675)">
        <path
          d="M5 0C2.51445 0 0.5 2.01445 0.5 4.5C0.5 6.98555 2.51445 9 5 9C7.48555 9 9.5 6.98555 9.5 4.5C9.5 2.01445 7.48555 0 5 0ZM5 8.24941C2.9293 8.24941 1.25059 6.5707 1.25059 4.5C1.25059 2.4293 2.9293 0.750586 5 0.750586C7.0707 0.750586 8.74941 2.4293 8.74941 4.5C8.74941 6.5707 7.0707 8.24941 5 8.24941ZM4.62559 4.12559H2.75V4.87617H5.37441V1.50117H4.62383V4.12559H4.62559Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_985_675">
          <rect width="9" height="9" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
