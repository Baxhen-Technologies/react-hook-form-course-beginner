import React from "react";
import clsx from "clsx";

import "./button.css";

const Button = ({ label, className, ...rest }) => {
  return (
    <button
      className={clsx("btn", { [className]: Boolean(className) })}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
