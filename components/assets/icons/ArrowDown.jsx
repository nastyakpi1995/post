import React from 'react';

export default function ArrowDown() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M4.29289 0.292893C4.65338 -0.0675907 5.22061 -0.0953203 5.6129 0.209705L5.70711 0.292893L9 3.585L12.2929 0.292893C12.6534 -0.0675907 13.2206 -0.0953203 13.6129 0.209705L13.7071 0.292893C14.0676 0.653377 14.0953 1.22061 13.7903 1.6129L13.7071 1.70711L9.70711 5.70711C9.34662 6.06759 8.77939 6.09532 8.3871 5.7903L8.29289 5.70711L4.29289 1.70711C3.90237 1.31658 3.90237 0.683418 4.29289 0.292893Z"
          fill="#BBBECD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="18"
          height="14"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
