import React from 'react';
import styles from './PageFooter.module.css';

const PageFooter = () => {
  return (
    <footer className={styles.footer}>
      Aryana Shop {new Date().getFullYear()}
    </footer>
  );
};

export default PageFooter;
