import React from 'react';

export default function ArrowBack(props) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="28" height="28" rx="14" fill="#65CFA6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 12.8C19 14.5529 18.1595 16.2729 16.7871 17.8366C15.7758 18.9888 14.5014 20 14 20C13.4986 20 12.2242 18.9888 11.2129 17.8366C9.84053 16.2729 9 14.5529 9 12.8C9 10.149 11.2386 8 14 8C16.7614 8 19 10.149 19 12.8ZM13.9956 11C12.8911 10.9974 11.9976 11.8908 12 12.9953C12.0024 14.0999 12.8998 14.9974 14.0044 15C15.1089 15.0026 16.0024 14.1092 16 13.0047C15.9976 11.9001 15.1002 11.0026 13.9956 11Z"
        fill="white"
      />
    </svg>
  );
}
