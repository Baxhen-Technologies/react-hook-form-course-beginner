import React from 'react';
import './link.css';

const Link = ({ children, ...rest }) => {
  return (
    <a className="link" {...rest}>
      {children}
    </a>
  );
};

export default Link;
