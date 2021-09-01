import React from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

import { Grid } from "@material-ui/core";

import useStyles from "./styles";

export default function Form({
  defaultValues,
  children,
  onSubmit,
  className,
  title,
  spacing = 5,
}) {
  const methods = useForm({ defaultValues, mode: "onBlur" });
  const { handleSubmit } = methods;

  const classes = useStyles();

  return (
    <div className="form__container">
      {title && <h1 className="form__title">{title}</h1>}

      <Grid
        container
        spacing={spacing}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.container, {
          [className]: Boolean(className),
        })}
      >
        {React.Children.map(children, (child) => {
          const { md, sm, xs, lg, xl, hidden } = child.props;

          const breakPoints = { md, sm, xs, lg, xl };
          return child.props?.name ? (
            <Grid item {...breakPoints}>
              {React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                  control: methods.control,
                  errors: methods.formState.errors,
                  getValues: methods.getValues,
                },
              })}
            </Grid>
          ) : (
            <Grid
              item
              {...breakPoints}
              className={clsx({ [classes.hidden]: hidden })}
            >
              {child}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
