import React from 'react';
import { get } from 'lodash';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';

import { customFunctionValidate } from '../../../../utils';

export function MaterialSelect({
  register,
  name,
  rules,
  errors,
  getValues,
  label,
  helperText,
  options,
}) {
  return (
    <FormControl error={Boolean(get(errors, name))}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        defaultValue=""
        {...register(name, {
          ...rules,
          validate: customFunctionValidate(rules, getValues),
        })}
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {get(errors, name)?.message || helperText}
      </FormHelperText>
    </FormControl>
  );
}
