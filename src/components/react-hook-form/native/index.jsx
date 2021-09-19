import React from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

import "./styles.css";
import Grid from "../../../components/grid";

export default function Form({
  defaultValues,
  children,
  onSubmit,
  className,
  title,
  spacing = 5,
}) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <div>
      {title && <h1 className="title">{title}</h1>}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid
          spacing={spacing}
          container
          className={clsx("grid__container", {
            [className]: Boolean(className),
          })}
        >
          {React.Children.map(children, (child) => {
            const { md, sm, xs, lg, xl, hidden } = child.props;

            const breakPoints = { md, sm, xs, lg, xl };
            return child.props?.name ? (
              <Grid
                item
                {...breakPoints}
                className={clsx({ grid__hidden: hidden })}
              >
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
                className={clsx({ grid__hidden: hidden })}
              >
                {child}
              </Grid>
            );
          })}
        </Grid>
      </form>
    </div>
  );
}
