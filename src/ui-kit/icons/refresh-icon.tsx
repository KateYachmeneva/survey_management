import { getColor, IIconProps } from "./utils";

export const RefreshIcon = ({ type, ...props }: IIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={getColor(type)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 4.40053V3C18.5 2.44772 18.9477 2 19.5 2C20.0523 2 20.5 2.44772 20.5 3V7C20.5 7.55229 20.0523 8 19.5 8L15.5 8C14.9477 8 14.5 7.55228 14.5 7C14.5 6.44772 14.9477 6 15.5 6L17.2918 6C15.8808 4.7544 14.0287 4 12 4C7.58172 4 4 7.58172 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 6.47715 6.47715 2 12 2C14.4817 2 16.7526 2.90476 18.5 4.40053ZM6.70824 18H8.5C9.05229 18 9.5 17.5523 9.5 17C9.5 16.4477 9.05229 16 8.5 16L4.5 16C3.94772 16 3.5 16.4477 3.5 17L3.5 21C3.5 21.5523 3.94772 22 4.5 22C5.05229 22 5.5 21.5523 5.5 21L5.5 19.5995C7.24741 21.0952 9.51827 22 12 22C17.5228 22 22 17.5229 22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12C20 16.4183 16.4183 20 12 20C9.97126 20 8.1192 19.2456 6.70824 18Z"
    />
  </svg>
);
