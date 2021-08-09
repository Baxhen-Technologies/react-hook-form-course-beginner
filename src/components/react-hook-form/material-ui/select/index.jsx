import React from 'react';
import { get } from 'lodash';
import { Controller } from 'react-hook-form';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';

import { customFunctionValidate } from '../../../../utils';

export function MaterialSelect({
  control,
  name,
  rules,
  defaultValue = '',
  getValues,
  label,
  helperText,
  options,
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
        <FormControl error={Boolean(get(errors, name))}>
          <InputLabel id="select-label">{label}</InputLabel>
          <Select labelId="select-label" id="select" defaultValue="" {...field}>
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
      )}
    />
  );
}
