import React, { useRef, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { get } from 'lodash';
import { customFunctionValidate } from '../../../../utils';

import './input.css';

export function Input({
  register = () => null,
  errors,
  rules,
  control,
  name,
  placeholder,
  helperText = '',
  getValues,
  ...rest
}) {
  const input = useWatch({ name, control });
  const labelRef = useRef();

  useEffect(() => {
    if (input && labelRef.current) {
      if (labelRef.current.getAttribute('input-has-value') === 'no') {
        labelRef.current.setAttribute('input-has-value', 'yes');
      }
    }
    if (!input && labelRef.current.getAttribute('input-has-value') === 'yes') {
      labelRef.current.setAttribute('input-has-value', 'no');
    }
  }, [input]);

  return (
    <>
      <div
        className="input__container"
        type={get(errors, name) ? 'error' : 'helper'}
      >
        <input
          {...register(name, {
            ...rules,
            validate: customFunctionValidate(rules, getValues),
          })}
          {...rest}
        />
        <label
          ref={labelRef}
          htmlFor={name}
          className="input__label"
          input-has-value="no"
          type={rest.type}
        >
          <span className="input__placeholder">{placeholder}</span>
        </label>
        <div className="input__helper-text">
          {get(errors, name)?.message || helperText}
        </div>
      </div>
    </>
  );
}
