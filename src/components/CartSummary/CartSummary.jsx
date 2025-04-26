import React from 'react';
import styles from './CartSummary.module.css';

export default function CartSummary({ cart }) {
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!items.length) return null;
  return (
    <aside className={styles.cartSummary}>
      <div className={styles.summaryContent}>
        <span className={styles.summaryTitle}>Cart Total:</span>
        <span className={styles.summaryAmount}>₹{total}</span>
        <span className={styles.summaryItems}>{items.length} item(s)</span>
      </div>
    </aside>
  );
}
