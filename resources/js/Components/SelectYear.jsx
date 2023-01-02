import React from 'react';

export default ({
  label,
  name,
  className,
  style,
  children,
  errors = [],
  ...props
}) => {
  let currentYear = new Date().getFullYear();
  const years = []
  for (var i = currentYear; i >= 1920; i--) {
    years.push(i)
  }

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        style={style}
        {...props}
        className={`form-select ${errors.length ? 'error' : ''}`}
      >
        <option value=''/>
        {years.map((year) =>
        <option key={year} value={year}>{year}</option>
        )}
      </select>
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};
