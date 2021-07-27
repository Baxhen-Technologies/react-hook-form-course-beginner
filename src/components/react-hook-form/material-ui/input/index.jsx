import React from 'react';

import { TextInput } from './text';
import { PasswordInput } from './password';

export function MaterialInput(props) {
  if (props.type === 'password') {
    return <PasswordInput {...props} />;
  }

  return <TextInput {...props} />;
}
