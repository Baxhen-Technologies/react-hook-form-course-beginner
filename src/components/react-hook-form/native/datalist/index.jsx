import React from 'react';

export function Datalist({ register, options, name, ...rest }) {
  return (
    <>
      <input list={name} {...register(name)} {...rest} />
      <datalist id={name}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </datalist>
    </>
  );
}
