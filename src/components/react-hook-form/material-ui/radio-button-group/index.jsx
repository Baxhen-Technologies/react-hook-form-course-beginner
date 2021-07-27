import React from 'react';
import { get } from 'lodash';

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
  name,
  rules,
  errors,
  getValues,
  label,
  helperText,
  options,
  ...rest
}) {
  return (
    <FormControl error={Boolean(get(errors, name))} component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        {...rest}
        name={name}
        {...register(name, {
          ...rules,
          validate: customFunctionValidate(rules, getValues),
        })}
      >
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
  );
}
