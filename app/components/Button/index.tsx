import React from 'react';
import styles from './index.scss';

type BtnOpts = {
  text?: string;
  onClick?: any;
};

export default function Button({
  text = '',
  onClick = () => {},
}: BtnOpts = {}) {
  return (
    <div className={styles.btn} onClick={onClick}>
      <i className="fas fa-camera" />
      <span>{text}</span>
    </div>
  );
}
