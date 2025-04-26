import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
import styles from './OrderReviewPage.module.css';
import { useSelector } from 'react-redux';

export default function OrderReviewPage() {
  const order = useSelector((state) => state.order.items);
  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className={styles.pageRoot}>
      <div className={styles.mainContent}>
        <PageHeader title="Order Review" subtitle="Check your items before confirming your order." />
        <section className={styles.orderSection}>
          <h3 className={styles.sectionTitle}>Your Order</h3>
          {order.length === 0 ? (
            <div style={{color: '#888', fontSize: '1.1rem', padding: '2rem 0', textAlign: 'center'}}>No items in your order.</div>
          ) : (
            <>
              <ul className={styles.orderList}>
                {order.map((item) => (
                  <li key={item.key} className={styles.orderItemRow}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemQty}>x{item.quantity}</span>
                    <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.orderTotalRow}>
                <span className={styles.totalLabel}>Total</span>
                <span className={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>
            </>
          )}
        </section>
        <section className={styles.actionRow}>
          <button className={styles.primaryBtn} aria-label="Confirm Order">Confirm Order</button>
          <button className={styles.secondaryBtn} aria-label="Back to Cart">Back to Cart</button>
        </section>
      </div>
      <PageFooter />
    </main>
  );
}
