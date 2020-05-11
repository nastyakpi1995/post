import React from 'react';

export default function Home(props) {
  return (
    <svg
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <rect width="28" height="28" rx="14" fill="#F9D36D" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4869 9.13803C14.1585 8.93354 13.7225 8.95626 13.4181 9.2062L9.24651 12.8104L9.1723 12.881C8.94667 13.1299 8.9393 13.5061 9.16995 13.7639L9.24364 13.835C9.45401 14.01 9.75153 14.0479 10 13.9387V17.5C10 17.7761 10.2239 18 10.5 18H13V15H15V18H17.5C17.7761 18 18 17.7761 18 17.5V13.9387C18.2792 14.0614 18.6202 13.9984 18.8301 13.7639C19.0838 13.4803 19.0495 13.0534 18.7535 12.8104L14.5819 9.2062L14.4869 9.13803Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d"
          x="-4"
          y="0"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
