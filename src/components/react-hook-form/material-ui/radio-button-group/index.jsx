import React from 'react';
import { get } from 'lodash';
import { Controller } from 'react-hook-form';

import {
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  FormHelperText,
} from '@material-ui/core';

import { customFunctionValidate } from '../../../../utils';

export function MaterialRadioButtonGroup({
  register,
  control,
  name,
  rules,
  errors,
  getValues,
  label,
  helperText,
  options,
  defaultValue = '',
  ...rest
}) {
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
        <FormControl error={Boolean(get(errors, name))} component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup {...rest} {...field} name={name}>
            {options.map(({ value, label }) => (
              <FormControlLabel
                value={value}
                key={value}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>

          <FormHelperText>
            {get(errors, name)?.message || helperText}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
