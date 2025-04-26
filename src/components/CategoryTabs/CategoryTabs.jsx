import React from 'react';
import styles from './CategoryTabs.module.css';

export default function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <nav className={styles.tabsNav}>
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={selected === cat.key ? styles.tabActive : styles.tab}
          onClick={() => onSelect(cat.key)}
          aria-selected={selected === cat.key}
          tabIndex={0}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
