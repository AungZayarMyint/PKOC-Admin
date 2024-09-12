import React, { useState } from "react";

const Input = ({
  title,
  type,
  error,
  tabIndex,
  placeholder,
  name,
  value,
  event,
  disabled=false,
  list
}) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  if (type === "password") {
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor={name}>
          {title}
        </label>
        <div className="position-relative">
          <input
            type={toggleIcon ? "text" : "password"}
            value={value}
            onChange={event}
            className="form-control pe-6"
            name={name}
            id={name}
            tabIndex={tabIndex}
            placeholder={placeholder}
            aria-label={placeholder}
            required
            disabled={disabled}
          />
          <span
            className="position-absolute"
            style={{
              top: "50%",
              right: "10px",
              transform: "translate(0, -50%)",
            }}
            role="button"
            onClick={() => setToggleIcon(!toggleIcon)}
          >
            {toggleIcon ? (
              <i
                className="bi bi-eye"
                style={{ fontSize: "18px", color: "#858585" }}
              ></i>
            ) : (
              <i
                className="bi bi-eye-slash"
                style={{ fontSize: "18px", color: "#858585" }}
              ></i>
            )}
          </span>
        </div>
        {error && <span className="mt-1 d-block text-danger">{error}</span>}
      </div>
    );
  }
  return (
    <div className="mb-3">
      {
        title &&
        <label className="form-label" htmlFor={name}>
          {title}
        </label>
      }
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={event}
        name={name}
        id={name}
        tabIndex={tabIndex}
        placeholder={placeholder}
        aria-label={placeholder}
        required
        disabled={disabled}
        list={list}
      />
      {error && <span className="mt-1 d-block text-danger">{error}</span>}
    </div>
  );
};

export default Input;
