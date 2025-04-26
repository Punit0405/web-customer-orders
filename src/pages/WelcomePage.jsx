import React, { useState } from 'react';
import { message } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './WelcomePage.module.css';
import { useDispatch } from 'react-redux';
import { clearOrder } from '../store/orderSlice';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';
import ProductCard from '../components/ProductCard/ProductCard';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

const initialOrder = [
  { key: 1, item: 'Product A', quantity: 2 },
  { key: 2, item: 'Product B', quantity: 1 },
];

export default function WelcomePage() {
  const [order, setOrder] = useState(initialOrder);

  const handleIncrement = (key) => {
    setOrder(order.map(o => o.key === key ? { ...o, quantity: o.quantity + 1 } : o));
  };

  const handleDecrement = (key) => {
    setOrder(order.map(o => o.key === key && o.quantity > 0 ? { ...o, quantity: o.quantity - 1 } : o));
  };

  const handleAction = (type) => {
    message.success(`Action: ${type}`);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateNewOrder = () => {
    dispatch(clearOrder());
    navigate('/products?token=punit');
  };

  return (
    <main className={styles.cartPageRoot}>
      <div className={styles.cartMainContent}>
        <PageHeader
          title="Welcome, Customer!"
          subtitle="Review and adjust your order below."
        />
        <div>
          <section className={styles.productListSection}>
            {order.map((item) => (
              <ProductCard
                key={item.key}
                item={item.item}
                quantity={item.quantity}
                onIncrement={() => handleIncrement(item.key)}
                onDecrement={() => handleDecrement(item.key)}
              />
            ))}
          </section>
          <section className={styles.actionRow}>
            <Button
              type="primary"
              size="large"
              icon={<CheckCircleOutlined />}
              onClick={() => handleAction('Add Other Items')}
              aria-label="Add Other Items"
            >
              Add Other Items
            </Button>
            <Button
              size="large"
              icon={<CloseCircleOutlined />}
              variant="green"
              onClick={handleCreateNewOrder}
              aria-label="Create New Order"
            >
              Create New Order
            </Button>
          </section>
        </div>
      </div>
      <PageFooter />
    </main>
  );
}
