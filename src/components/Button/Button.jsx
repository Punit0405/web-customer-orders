import React from 'react';
import { Button as AntButton } from 'antd';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', icon, ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant] || ''}`;
  
  return (
    <AntButton
      {...props}
      icon={icon}
      className={`${buttonClass} ${props.className || ''}`}
    >
      {children}
    </AntButton>
  );
};

export default Button;
