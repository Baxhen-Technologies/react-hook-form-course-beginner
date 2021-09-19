import React from "react";
import { TextField } from "@material-ui/core";
import { get } from "lodash";
import { Controller } from "react-hook-form";

import { customFunctionValidate } from "../../../../../utils";
import useStyles from "./styles";

export function TextInput({
  register,
  name,
  rules,
  getValues,
  helperText,
  control,
  defaultValue = "",
  transform,
  ...rest
}) {
  const classes = useStyles();
  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      rules={{
        ...rules,
        validate: customFunctionValidate(rules, getValues),
      }}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...rest}
          {...field}
          value={transform ? transform.input(field.value) : field.value}
          classes={{ root: classes.helperText }}
          onChange={(e) =>
            transform ? transform.output(e, field.onChange) : field.onChange(e)
          }
          style={{ width: "100%" }}
          helperText={get(errors, name)?.message || helperText}
          error={Boolean(get(errors, name))}
        />
      )}
    />
  );
}
