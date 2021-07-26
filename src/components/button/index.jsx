import React from 'react';
import './button.css';

const Button = ({ label, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      {label}
    </button>
  );
};

export default Button;
