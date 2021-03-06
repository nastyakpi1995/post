import React from 'react';

export default function ArrowBack(props) {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8.99327 4.88338C8.93551 4.38604 8.51284 4 8 4C7.44772 4 7 4.44772 7 5V8L7.00673 8.11662C7.06449 8.61396 7.48716 9 8 9H10L10.1166 8.99327C10.614 8.93551 11 8.51284 11 8L10.9933 7.88338C10.9355 7.38604 10.5128 7 10 7H9V5L8.99327 4.88338Z"
          fill="white"
        />
        <path
          d="M8.99327 4.88338L9.49244 4.85458L9.49161 4.8401L9.48993 4.82569L8.99327 4.88338ZM7 8H6.5V8.01441L6.50083 8.0288L7 8ZM7.00673 8.11662L6.50756 8.14542L6.50839 8.1599L6.51007 8.17431L7.00673 8.11662ZM10 9V9.5H10.0144L10.0288 9.49917L10 9ZM10.1166 8.99327L10.1454 9.49244L10.1599 9.49161L10.1743 9.48993L10.1166 8.99327ZM11 8H11.5V7.98559L11.4992 7.97121L11 8ZM10.9933 7.88338L11.4924 7.85458L11.4916 7.8401L11.4899 7.82569L10.9933 7.88338ZM9 7H8.5V7.5H9V7ZM9 5H9.5V4.98559L9.49917 4.9712L9 5ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8H2.5C2.5 4.96243 4.96243 2.5 8 2.5V1.5ZM14.5 8C14.5 4.41015 11.5899 1.5 8 1.5V2.5C11.0376 2.5 13.5 4.96243 13.5 8H14.5ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8H13.5C13.5 11.0376 11.0376 13.5 8 13.5V14.5ZM1.5 8C1.5 11.5899 4.41015 14.5 8 14.5V13.5C4.96243 13.5 2.5 11.0376 2.5 8H1.5ZM8 4.5C8.25607 4.5 8.46779 4.69292 8.49661 4.94107L9.48993 4.82569C9.40322 4.07916 8.76961 3.5 8 3.5V4.5ZM7.5 5C7.5 4.72386 7.72386 4.5 8 4.5V3.5C7.17157 3.5 6.5 4.17157 6.5 5H7.5ZM7.5 8V5H6.5V8H7.5ZM7.5059 8.08782L7.49917 7.9712L6.50083 8.0288L6.50756 8.14542L7.5059 8.08782ZM8 8.5C7.74393 8.5 7.53221 8.30708 7.50339 8.05893L6.51007 8.17431C6.59678 8.92084 7.23039 9.5 8 9.5V8.5ZM10 8.5H8V9.5H10V8.5ZM10.0878 8.4941L9.9712 8.50083L10.0288 9.49917L10.1454 9.49244L10.0878 8.4941ZM10.5 8C10.5 8.25607 10.3071 8.46779 10.0589 8.49661L10.1743 9.48993C10.9208 9.40323 11.5 8.76961 11.5 8H10.5ZM10.4941 7.91217L10.5008 8.02879L11.4992 7.97121L11.4924 7.85458L10.4941 7.91217ZM10 7.5C10.2561 7.5 10.4678 7.69292 10.4966 7.94107L11.4899 7.82569C11.4032 7.07916 10.7696 6.5 10 6.5V7.5ZM9 7.5H10V6.5H9V7.5ZM8.5 5V7H9.5V5H8.5ZM8.4941 4.91218L8.50083 5.0288L9.49917 4.9712L9.49244 4.85458L8.4941 4.91218Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-2.5"
          y="1.5"
          width="21"
          height="21"
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
