import React from 'react';

export default function Avatar() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="140" height="140" rx="70" fill="#D8D8D8" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="140"
        height="140"
      >
        <rect width="140" height="140" rx="70" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="-124"
          y="-1"
          width="305"
          height="245.743"
          fill="url(#pattern0)"
        />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="-124"
          y="-1"
          width="305"
          height="246"
        >
          <rect
            x="-124"
            y="-1"
            width="305"
            height="245.743"
            fill="url(#pattern1)"
          />
        </mask>
        <g mask="url(#mask1)">
          <rect
            x="-124"
            y="-1"
            width="305"
            height="245.743"
            fill="#222740"
            fillOpacity="0.04316"
          />
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.000670691 0.000833333)" />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.000670691 0.000833333)" />
        </pattern>
        <image
          id="image0"
          width="1491"
          height="1200"
        />
      </defs>
    </svg>
  );
}