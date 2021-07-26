import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import './form.css';

export default function Form({
  defaultValues,
  children,
  onSubmit,
  className,
  title,
}) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <div className="form__container">
      {title && <h1 className="form__title">{title}</h1>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx('fields__container', {
          [className]: Boolean(className),
        })}
      >
        {React.Children.map(children, (child) => {
          return child.props?.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                  control: methods.control,
                  errors: methods.formState.errors,
                  getValues: methods.getValues,
                },
              })
            : child;
        })}
      </form>
    </div>
  );
}
