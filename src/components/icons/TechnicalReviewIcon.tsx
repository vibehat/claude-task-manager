import React from 'react';

export const TechnicalReviewIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeDasharray="3.14 0"
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke="#22c55e"
        strokeWidth="4"
        strokeDasharray="4.167846253762459 100"
        strokeDashoffset="0"
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  );
};
