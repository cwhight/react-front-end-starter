import React from 'react';
import './Button.scss'
import '../../core/core.scss'

import { Link } from 'react-router-dom';
export interface ButtonProps {
  text: string;
  className: string;
  route?: string;
}

const Button = (props: ButtonProps) => {
  const { route, text, className } = props
  return (
    <button className={`button ${className}`}>
      <Link to={route}>{text}</Link>
    </button>
  );
}
 export default Button
