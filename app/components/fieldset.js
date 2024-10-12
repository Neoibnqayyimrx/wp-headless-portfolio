import React from 'react';

export default function Fieldset({ children, className }) {
  return (
    <fieldset className={`p-4 mb-4 rounded-md ${className || ''}`}>
      {children}
    </fieldset>
  );
}
