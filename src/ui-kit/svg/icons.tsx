import React from "react";

interface IIcon {
  onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;

  style?: object;
}

export const EyeIcon: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="password-eye"
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.93856 7.31638C1.84906 7.56074 1.66779 7.76057 1.43329 7.87342C1.19879 7.98626 0.929529 8.00322 0.682722 7.92069C0.435915 7.83816 0.231015 7.66264 0.111556 7.43144C-0.0079017 7.20024 -0.0325019 6.93157 0.0429829 6.68252C0.0229873 6.74251 0.0429829 6.68052 0.0429829 6.68052C0.0785392 6.57042 0.119922 6.4623 0.166955 6.35659C0.246938 6.16663 0.364912 5.90469 0.526876 5.59476C0.856803 4.9749 1.37069 4.14908 2.12852 3.32326C3.65818 1.65363 6.16363 0 9.98878 0C13.8139 0 16.3194 1.65363 17.849 3.32326C18.6655 4.21902 19.3277 5.24405 19.8086 6.35659L19.9006 6.58254C19.9066 6.59854 19.9266 6.70252 19.9466 6.80249L19.9866 6.99845C19.9866 6.99845 20.1545 7.6643 19.3027 7.94624C19.0519 8.03001 18.778 8.01098 18.5412 7.8933C18.3043 7.77563 18.1238 7.5689 18.039 7.31838V7.31238L18.027 7.28039C17.9265 7.02352 17.8117 6.77252 17.6831 6.52855C17.3275 5.85774 16.8881 5.23487 16.3754 4.67496C15.1556 3.34526 13.1621 1.99956 9.98878 1.99956C6.81548 1.99956 4.82192 3.34526 3.60219 4.67496C2.94182 5.39894 2.40479 6.22644 2.01255 7.12442C1.99157 7.17603 1.97157 7.22802 1.95256 7.28039L1.93856 7.31638ZM5.98967 7.99823C5.98967 6.9376 6.411 5.92041 7.16098 5.17043C7.91096 4.42045 8.92815 3.99911 9.98878 3.99911C11.0494 3.99911 12.0666 4.42045 12.8166 5.17043C13.5666 5.92041 13.9879 6.9376 13.9879 7.99823C13.9879 9.05886 13.5666 10.076 12.8166 10.826C12.0666 11.576 11.0494 11.9973 9.98878 11.9973C8.92815 11.9973 7.91096 11.576 7.16098 10.826C6.411 10.076 5.98967 9.05886 5.98967 7.99823Z"
        fill="#F6CF00"
      />
    </svg>
  );
};

export const ClosedEyeIcon: React.FC<IIcon> = ({ onClick, style }) => {
  return (
    <svg
      style={style}
      onClick={onClick}
      className="password-eye"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.219732 0.21934C0.0927148 0.346328 0.0154866 0.514682 0.00209013 0.693791C-0.0113063 0.8729 0.0400186 1.05087 0.146732 1.19534L0.219732 1.27934L4.25373 5.31434C2.28676 6.69297 0.882618 8.73439 0.298732 11.0643C0.253712 11.2561 0.285971 11.458 0.388538 11.6262C0.491105 11.7944 0.655742 11.9155 0.846869 11.9633C1.038 12.0111 1.24026 11.9818 1.40995 11.8817C1.57965 11.7816 1.70313 11.6187 1.75373 11.4283C2.27263 9.36034 3.55064 7.56329 5.33373 6.39434L7.14373 8.20434C6.42073 8.95983 6.02232 9.96842 6.03386 11.0141C6.04539 12.0597 6.46594 13.0593 7.20544 13.7986C7.94493 14.538 8.94456 14.9584 9.9902 14.9697C11.0359 14.9811 12.0444 14.5825 12.7997 13.8593L18.7187 19.7793C18.8526 19.9135 19.0322 19.9921 19.2216 19.9992C19.411 20.0063 19.596 19.9415 19.7396 19.8177C19.8831 19.694 19.9744 19.5205 19.9953 19.3321C20.0161 19.1437 19.9648 18.9544 19.8517 18.8023L19.7787 18.7183L13.6657 12.6043L13.6667 12.6023L6.71673 5.65634L6.71873 5.65434L5.58573 4.52434L1.27973 0.21934C1.13911 0.0788896 0.948483 0 0.749732 0C0.550982 0 0.360358 0.0788896 0.219732 0.21934ZM9.99973 3.49934C8.99973 3.49934 8.02973 3.64734 7.11073 3.92434L8.34773 5.16034C10.4873 4.7367 12.7078 5.15142 14.5502 6.31877C16.3926 7.48611 17.716 9.31681 18.2467 11.4323C18.2985 11.6213 18.4222 11.7824 18.5913 11.8814C18.7604 11.9803 18.9615 12.0091 19.1516 11.9617C19.3417 11.9143 19.5056 11.7944 19.6084 11.6276C19.7113 11.4608 19.7447 11.2605 19.7017 11.0693C19.1595 8.9068 17.9103 6.9874 16.1525 5.61591C14.3948 4.24443 12.2292 3.49947 9.99973 3.49934ZM10.1947 7.00934L13.9957 10.8093C13.9466 9.81724 13.5303 8.87885 12.8278 8.17656C12.1253 7.47427 11.1868 7.05825 10.1947 7.00934Z"
        fill="#F6CF00"
      />
    </svg>
  );
};

export const VectorIcon: React.FC<IIcon> = () => {
  return (
    <svg
      className="vector-icon"
      width="15"
      height="7"
      viewBox="0 0 15 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H15V1.875H0V0ZM3.75 4.6875H15V6.5625H3.75V4.6875Z"
        fill="black"
      />
    </svg>
  );
};

export const LogoIcon: React.FC<IIcon> = ({ style }) => {
  return (
    <svg
      style={style}
      className="d-inline-block align-top"
      width="26"
      height="30"
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="26" height="34.7512" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_290_418"
            transform="scale(0.00487805 0.00364964)"
          />
        </pattern>
        <image
          id="image0_290_418"
          width="205"
          height="274"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const PlusIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#F6F7F9" />
      <path
        d="M26.125 23.875V16H23.875V23.875H16V26.125H23.875V34H26.125V26.125H34V23.875H26.125Z"
        fill="#1F50BA"
      />
    </svg>
  );
};

export const MinusIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#F6F7F9" />
      <path
        d="M34 25H16"
        stroke="#1F50BA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const AddClusterIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#F6F7F9" />
      <path
        d="M24.6437 17.3688L21.55 15.5125C21.3437 15.4438 21.2062 15.375 21 15.375C20.7937 15.375 20.6562 15.4438 20.5187 15.5125L17.425 17.3688C17.0812 17.575 16.875 17.9187 16.875 18.2625V22.1125C16.875 22.4563 17.0812 22.8 17.3562 23.0063L20.45 24.8625C20.5875 24.9313 20.7937 25 20.9312 25C21.0687 25 21.275 24.9313 21.4125 24.8625L24.5062 23.0063C24.7812 22.8 24.9875 22.525 24.9875 22.1125V18.2625C25.125 17.9187 24.9187 17.575 24.6437 17.3688ZM23.75 21.9062L21 23.5562L18.25 21.9062V18.4688L21 16.8187L23.75 18.4688V21.9062ZM30.1437 26.9937L27.05 25.1375C26.8437 25.0688 26.7062 25 26.5 25C26.2937 25 26.1562 25.0688 26.0187 25.1375L22.925 26.9937C22.65 27.2 22.4437 27.475 22.4437 27.8875V31.7375C22.4437 32.0812 22.65 32.425 22.925 32.6313L26.0187 34.4875C26.1562 34.5562 26.3625 34.625 26.5 34.625C26.6375 34.625 26.8437 34.5562 26.9812 34.4875L30.075 32.6313C30.35 32.425 30.5562 32.15 30.5562 31.7375V27.8875C30.625 27.5438 30.4187 27.2 30.1437 26.9937ZM29.25 31.5312L26.5 33.1812L23.75 31.5312V28.0938L26.5 26.4438L29.25 28.0938V31.5312ZM19.1437 26.9937L16.05 25.1375C15.8437 25.0688 15.7062 25 15.5 25C15.2937 25 15.1562 25.0688 15.0187 25.1375L11.925 26.9937C11.5812 27.2 11.375 27.5438 11.375 27.8875V31.7375C11.375 32.0812 11.5813 32.425 11.8562 32.6313L14.95 34.4875C15.1562 34.5562 15.2937 34.625 15.5 34.625C15.7062 34.625 15.8437 34.5562 15.9812 34.4875L19.075 32.6313C19.35 32.425 19.5562 32.15 19.5562 31.7375V27.8875C19.625 27.5438 19.4187 27.2 19.1437 26.9937ZM18.25 31.5312L15.5 33.1812L12.75 31.5312V28.0938L15.5 26.4438L18.25 28.0938V31.5312Z"
        fill="#1F50BA"
      />
      <path
        d="M34.75 18.25V13H33.25V18.25H28V19.75H33.25V25H34.75V19.75H40V18.25H34.75Z"
        fill="#1F50BA"
      />
    </svg>
  );
};
export const DeleteClusterIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#F6F7F9" />
      <path
        d="M25.6437 17.3688L22.55 15.5125C22.3437 15.4438 22.2062 15.375 22 15.375C21.7937 15.375 21.6562 15.4438 21.5187 15.5125L18.425 17.3688C18.0812 17.575 17.875 17.9187 17.875 18.2625V22.1125C17.875 22.4563 18.0812 22.8 18.3562 23.0063L21.45 24.8625C21.5875 24.9313 21.7937 25 21.9312 25C22.0687 25 22.275 24.9313 22.4125 24.8625L25.5062 23.0063C25.7812 22.8 25.9875 22.525 25.9875 22.1125V18.2625C26.125 17.9187 25.9187 17.575 25.6437 17.3688ZM24.75 21.9062L22 23.5562L19.25 21.9062V18.4688L22 16.8187L24.75 18.4688V21.9062ZM31.1437 26.9937L28.05 25.1375C27.8437 25.0688 27.7062 25 27.5 25C27.2937 25 27.1562 25.0688 27.0187 25.1375L23.925 26.9937C23.65 27.2 23.4437 27.475 23.4437 27.8875V31.7375C23.4437 32.0812 23.65 32.425 23.925 32.6313L27.0187 34.4875C27.1562 34.5562 27.3625 34.625 27.5 34.625C27.6375 34.625 27.8437 34.5562 27.9812 34.4875L31.075 32.6313C31.35 32.425 31.5562 32.15 31.5562 31.7375V27.8875C31.625 27.5438 31.4187 27.2 31.1437 26.9937ZM30.25 31.5312L27.5 33.1812L24.75 31.5312V28.0938L27.5 26.4438L30.25 28.0938V31.5312ZM20.1437 26.9937L17.05 25.1375C16.8437 25.0688 16.7062 25 16.5 25C16.2937 25 16.1562 25.0688 16.0187 25.1375L12.925 26.9937C12.5812 27.2 12.375 27.5438 12.375 27.8875V31.7375C12.375 32.0812 12.5813 32.425 12.8562 32.6313L15.95 34.4875C16.1562 34.5562 16.2937 34.625 16.5 34.625C16.7062 34.625 16.8437 34.5562 16.9812 34.4875L20.075 32.6313C20.35 32.425 20.5562 32.15 20.5562 31.7375V27.8875C20.625 27.5438 20.4187 27.2 20.1437 26.9937ZM19.25 31.5312L16.5 33.1812L13.75 31.5312V28.0938L16.5 26.4438L19.25 28.0938V31.5312Z"
        fill="#1F50BA"
      />
      <path d="M40 19H30" stroke="#1F50BA" stroke-linecap="square" />
    </svg>
  );
};
export const AddWellIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#F6F7F9" />
      <path
        d="M37.75 18.25V13H36.25V18.25H31V19.75H36.25V25H37.75V19.75H43V18.25H37.75Z"
        fill="#1F50BA"
      />
      <path
        d="M29.7632 24.1675C30.1986 25.7984 29.2323 27.4751 27.6014 27.9105L27.0094 28.0671C26.3601 28.2428 25.6878 27.857 25.5122 27.2039L24.5497 23.6136L11.6323 26.9556V33.0362H13.2441L15.2722 27.2421L18.0872 26.4706L17.117 29.3695H19.6608L18.6142 26.3751L20.9861 25.7602L23.5337 33.0362H28.7778C29.4538 33.0362 30 33.5824 30 34.2584C30 34.9345 29.4538 35.4806 28.7778 35.4806H9.22222C8.54733 35.4806 8 34.9345 8 34.2584C8 33.5824 8.54733 33.0362 9.22222 33.0362H9.83333V22.9529C9.83333 22.4449 10.2439 22.0362 10.75 22.0362C11.2561 22.0362 11.6667 22.4449 11.6667 22.9529V24.4272L16.716 23.1209L17.2354 21.6313C17.4073 21.1425 17.8694 20.814 18.3889 20.814C18.9083 20.814 19.3705 21.1425 19.5424 21.6313L19.783 22.3227L23.9194 21.2532L22.9837 17.76C22.808 17.108 23.1937 16.4377 23.8469 16.263L24.4389 16.1049C26.066 15.6681 27.7427 16.6355 28.1781 18.2657L29.7632 24.1675ZM15.8337 33.0362H20.9441L20.5163 31.814H16.2615L15.8337 33.0362V33.0362Z"
        fill="#1F50BA"
      />
    </svg>
  );
};
export const DeleteWellIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#F6F7F9" />
      <path d="M42 18H32" stroke="#1F50BA" stroke-linecap="square" />
      <path
        d="M29.7632 23.1675C30.1986 24.7984 29.2323 26.4751 27.6014 26.9105L27.0094 27.0671C26.3601 27.2428 25.6878 26.857 25.5122 26.2039L24.5497 22.6136L11.6323 25.9557V32.0362H13.2441L15.2722 26.2421L18.0872 25.4706L17.117 28.3695H19.6608L18.6142 25.3751L20.9861 24.7602L23.5337 32.0362H28.7778C29.4538 32.0362 30 32.5824 30 33.2584C30 33.9345 29.4538 34.4806 28.7778 34.4806H9.22222C8.54733 34.4806 8 33.9345 8 33.2584C8 32.5824 8.54733 32.0362 9.22222 32.0362H9.83333V21.9529C9.83333 21.4449 10.2439 21.0362 10.75 21.0362C11.2561 21.0362 11.6667 21.4449 11.6667 21.9529V23.4272L16.716 22.1209L17.2354 20.6313C17.4073 20.1425 17.8694 19.814 18.3889 19.814C18.9083 19.814 19.3705 20.1425 19.5424 20.6313L19.783 21.3227L23.9194 20.2532L22.9837 16.76C22.808 16.108 23.1937 15.4377 23.8469 15.263L24.4389 15.1049C26.066 14.6681 27.7427 15.6355 28.1781 17.2657L29.7632 23.1675ZM15.8337 32.0362H20.9441L20.5163 30.814H16.2615L15.8337 32.0362Z"
        fill="#1F50BA"
      />
    </svg>
  );
};

export const ArrowRightIcon: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.71429L4.375 6L0 10.2857L0.875 12L7 6L0.875 0L0 1.71429Z"
        fill="#1F50BA"
      />
    </svg>
  );
};
export const ArrowLeftIcon: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1.71429L2.625 6L7 10.2857L6.125 12L0 6L6.125 0L7 1.71429Z"
        fill="#1F50BA"
      />
    </svg>
  );
};

export const DeleteIcon: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M3.63499 2.66666L14.3132 13.3333"
        stroke="black"
        stroke-width="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.63499 13.3333L14.3132 2.66665"
        stroke="black"
        stroke-width="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Envelop: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.55 0H3.45C2.535 0 1.65748 0.363481 1.01048 1.01048C0.363481 1.65748 0 2.535 0 3.45V14.95C0 15.865 0.363481 16.7425 1.01048 17.3895C1.65748 18.0365 2.535 18.4 3.45 18.4H19.55C20.465 18.4 21.3425 18.0365 21.9895 17.3895C22.6365 16.7425 23 15.865 23 14.95V3.45C23 2.535 22.6365 1.65748 21.9895 1.01048C21.3425 0.363481 20.465 0 19.55 0ZM18.7795 2.3L11.5 7.7625L4.2205 2.3H18.7795ZM19.55 16.1H3.45C3.145 16.1 2.85249 15.9788 2.63683 15.7632C2.42116 15.5475 2.3 15.255 2.3 14.95V3.7375L10.81 10.12C11.0091 10.2693 11.2512 10.35 11.5 10.35C11.7488 10.35 11.9909 10.2693 12.19 10.12L20.7 3.7375V14.95C20.7 15.255 20.5788 15.5475 20.3632 15.7632C20.1475 15.9788 19.855 16.1 19.55 16.1Z"
        fill="#1F50BA"
      />
    </svg>
  );
};

export const Document: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width="21"
      height="26"
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1558 6.51741L13.9112 0.272768C13.7371 0.0986608 13.502 0 13.2554 0H0.928571C0.414955 0 0 0.414955 0 0.928571V25.0714C0 25.585 0.414955 26 0.928571 26H19.5C20.0136 26 20.4286 25.585 20.4286 25.0714V7.17612C20.4286 6.92946 20.3299 6.69152 20.1558 6.51741ZM18.2871 7.60268H12.8259V2.14152L18.2871 7.60268ZM18.3393 23.9107H2.08929V2.08929H10.8527V8.35714C10.8527 8.68038 10.9811 8.99037 11.2096 9.21893C11.4382 9.44749 11.7482 9.57589 12.0714 9.57589H18.3393V23.9107ZM10.2752 14.9761L8.48192 12.0047C8.41808 11.9002 8.30491 11.8364 8.18304 11.8364H7.06875C7.00201 11.8364 6.93817 11.8538 6.88304 11.8915C6.72054 11.9931 6.67121 12.2078 6.77567 12.3732L9.16384 16.1571L6.74375 20.0107C6.71087 20.0636 6.69271 20.1242 6.69114 20.1865C6.68957 20.2487 6.70466 20.3102 6.73484 20.3647C6.76502 20.4191 6.80919 20.4645 6.8628 20.4961C6.9164 20.5278 6.97749 20.5445 7.03973 20.5446H8.04085C8.16272 20.5446 8.27299 20.4808 8.33683 20.3792L10.1562 17.4339L11.9641 20.3763C12.0279 20.4808 12.1411 20.5417 12.26 20.5417H13.3482C13.415 20.5417 13.4788 20.5214 13.5368 20.4866C13.6993 20.3821 13.7458 20.1674 13.6413 20.0049L11.2038 16.221L13.679 12.3761C13.7125 12.3234 13.7313 12.2627 13.7334 12.2003C13.7355 12.1379 13.7208 12.0761 13.6908 12.0212C13.6609 11.9664 13.6169 11.9206 13.5632 11.8886C13.5096 11.8566 13.4484 11.8396 13.3859 11.8393H12.35C12.2281 11.8393 12.115 11.9031 12.0511 12.0076L10.2752 14.9761Z"
        fill="#1F50BA"
      />
    </svg>
  );
};

export const AddRun: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="12" stroke="#1F50BA" strokeWidth="2" />
      <line x1="13" y1="6" x2="13" y2="20" stroke="#1F50BA" strokeWidth="2" />
      <line x1="6" y1="13" x2="20" y2="13" stroke="#1F50BA" strokeWidth="2" />
    </svg>
  );
};

export const DeleteRun: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="12" stroke="#FF8863" strokeWidth="2" />
      <line x1="6" y1="13" x2="20" y2="13" stroke="#FF8863" strokeWidth="2" />
    </svg>
  );
};
export const UpdateIcon: React.FC<IIcon> = () => {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 30 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="password-eye"
    >
      {/* <circle cx="30" cy="30" r="30" fill="#F6F7F9" /> */}
      <g>
        <path
          d="M14.133,28.265c-7.061,0-12.805-5.75-12.805-12.809c0-7.06,5.744-12.807,12.805-12.807c0.469,0,0.943,0.027,1.414,0.08
		v-2.07c0-0.266,0.164-0.508,0.406-0.611c0.252-0.098,0.531-0.043,0.723,0.148l4.537,4.547c0.258,0.258,0.258,0.67,0,0.932
		l-4.535,4.557c-0.193,0.188-0.473,0.246-0.725,0.143c-0.242-0.104-0.406-0.344-0.406-0.609V7.47
		c-0.469-0.086-0.941-0.125-1.414-0.125c-4.473,0-8.113,3.639-8.113,8.111c0,4.471,3.641,8.113,8.113,8.113s8.111-3.643,8.111-8.113
		c0-0.363,0.295-0.66,0.662-0.66h3.369c0.365,0,0.662,0.297,0.662,0.66C26.937,22.515,21.189,28.265,14.133,28.265z"
          fill="#1F50BA"
          transform="translate(10, 0)"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </g>
    </svg>
  );
};
export const Save: React.FC<IIcon> = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="password-eye"
      transform="translate(7, 0)"
    >
      {/* <circle cx="30" cy="30" r="30" fill="#F6F7F9" /> */}
          <path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
          fill="#1F50BA"
         
        />
       
    </svg>
  );
};
export const Sort: React.FC<IIcon> = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="password-eye"
      transform="translate(23, 0)"
      baseProfile="tiny" 
    >
      {/* <circle cx="30" cy="30" r="30" fill="#F6F7F9" /> */}
          <path d="M205.357 401.786q0 3.348-2.79 6.696l-89.007 89.007q-2.79 2.511-6.417 2.511-3.348 0-6.417-2.511l-89.286-89.286q-4.185-4.464-1.953-9.766 2.232-5.581 8.371-5.581h53.571v-383.929q0-3.906 2.511-6.417t6.417-2.511h53.571q3.906 0 6.417 2.511t2.511 6.417v383.929h53.571q3.906 0 6.417 2.511t2.511 6.417zM500 437.5v53.571q0 3.906-2.511 6.417t-6.417 2.511h-232.143q-3.906 0-6.417-2.511t-2.511-6.417v-53.571q0-3.906 2.511-6.417t6.417-2.511h232.143q3.906 0 6.417 2.511t2.511 6.417zM446.429 294.643v53.571q0 3.906-2.511 6.417t-6.417 2.511h-178.571q-3.906 0-6.417-2.511t-2.511-6.417v-53.571q0-3.906 2.511-6.417t6.417-2.511h178.571q3.906 0 6.417 2.511t2.511 6.417zM392.857 151.786v53.571q0 3.906-2.511 6.417t-6.417 2.511h-125q-3.906 0-6.417-2.511t-2.511-6.417v-53.571q0-3.906 2.511-6.417t6.417-2.511h125q3.906 0 6.417 2.511t2.511 6.417zM339.286 8.929v53.571q0 3.906-2.511 6.417t-6.417 2.511h-71.429q-3.906 0-6.417-2.511t-2.511-6.417v-53.571q0-3.906 2.511-6.417t6.417-2.511h71.429q3.906 0 6.417 2.511t2.511 6.417z"
          fill="#1F50BA"
         
        />
       
    </svg>
  );
};

