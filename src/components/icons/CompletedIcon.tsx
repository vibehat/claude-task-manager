import React from 'react';

export const CompletedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <path
        d="M4.5 7L6.5 9L9.5 5"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
