import React from "react";
import clsx from "clsx";

import "./styles.css";

const Grid = ({ children, container, item, md, xs, sm, lg, xl, spacing }) => {
  return (
    <div
      className={clsx({
        container,
        item,
        [`xs-${typeof xs === "boolean" ? "auto" : xs}`]: !!xs,
        [`sm-${typeof sm === "boolean" ? "auto" : sm}`]: !!sm,
        [`md-${typeof md === "boolean" ? "auto" : md}`]: !!md,
        [`lg-${typeof lg === "boolean" ? "auto" : lg}`]: !!lg,
        [`xl-${typeof xl === "boolean" ? "auto" : xl}`]: !!xl,
        [`spacing-${spacing}`]: !!spacing,
      })}
    >
      {children}
    </div>
  );
};

export default Grid;
