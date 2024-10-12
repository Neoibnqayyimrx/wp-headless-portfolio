import React from 'react';

export default function Textarea({ name, id, className, required, ...rest }) {
  return (
    <textarea
      name={name}
      id={id}
      className={`border rounded border-slate-300 outline-0 py-1 px-3 hover:border-slate-900 focus:border-slate-900 ${className || ''}`}
      required={required}
      {...rest} // Spread operator to pass any other props like onChange, value, etc.
    />
  );
}
