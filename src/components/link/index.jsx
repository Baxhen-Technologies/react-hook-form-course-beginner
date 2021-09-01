import React from "react";
import clsx from "clsx";
import "./link.css";

const Link = ({ children, className, ...rest }) => {
  return (
    <a className={clsx("link", { [className]: Boolean(className) })} {...rest}>
      {children}
    </a>
  );
};

export default Link;
