import React from "react";

export default function Select({
  children,
  value,
  event,
  name,
  tabIndex,
  error,
  title,
}) {
  return (
    <div className="mb-3">
      {title && (
        <label className="form-label" htmlFor={name}>
          {title}
        </label>
      )}
      <select
        type="select"
        className="form-select"
        value={value}
        onChange={event}
        name={name}
        id={name}
        tabIndex={tabIndex}
        required
      >
        {" "}
        {children}{" "}
      </select>
      {error && <span className="mt-1 d-block text-danger">{error}</span>}
    </div>
  );
}
