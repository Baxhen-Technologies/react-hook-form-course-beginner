import React, { useState } from "react";
import { get } from "lodash";

import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { customFunctionValidate } from "../../../../../utils";
import useStyles from "./styles";

export function PasswordInput({
  register,
  name,
  rules,
  errors,
  getValues,
  helperText,
  ...rest
}) {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...rest}
      {...register(name, {
        ...rules,
        validate: customFunctionValidate(rules, getValues),
      })}
      style={{ width: "100%" }}
      classes={{ root: classes.helperText }}
      helperText={get(errors, name)?.message || helperText}
      error={Boolean(get(errors, name))}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={showPassword ? "text" : "password"}
    />
  );
}
