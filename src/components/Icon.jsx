import React from 'react';

export default function Icon({ name, className = '', ...props }) {
  return (
    <svg className={`i ${className}`.trim()} aria-hidden="true" {...props}>
      <use href={`#${name}`} />
    </svg>
  );
}
