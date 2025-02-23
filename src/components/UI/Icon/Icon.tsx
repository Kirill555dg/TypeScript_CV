import React from 'react';
import styles from './Icon.module.css';

interface IconProps {
  children: React.ReactNode;
  size?: 'sm' | 'md';
}

export default function Icon({ children, size = 'md' }: IconProps) {
  return (
    <span className={`${styles.icon} ${styles[size]}`}>
      {children}
    </span>
  );
}