import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
import styles from './OrderReviewPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentOrder, setLastOrder } from '../store/orderSlice';

export default function OrderReviewPage() {
  const order = useSelector((state) => state.order.current_order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // On "Back to Cart", restore quantities and go to products
  const handleBackToCart = () => {
    // Restore current_order in redux (already present, but triggers re-render if needed)
    dispatch(setCurrentOrder(order));
    navigate('/products');
  };

  // On "Confirm Order", set last_order and go to order success page
  const handleConfirmOrder = () => {
    dispatch(setLastOrder(order));
    navigate('/order-success');
  };

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
          <button className={styles.primaryBtn} aria-label="Confirm Order" onClick={handleConfirmOrder}>Confirm Order</button>
          <button className={styles.secondaryBtn} aria-label="Back to Cart" onClick={handleBackToCart}>Back to Cart</button>
        </section>
      </div>
      <PageFooter />
    </main>
  );
}
