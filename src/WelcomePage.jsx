import React, { useState } from 'react';
import { Typography, Button, message, Avatar, Tooltip } from 'antd';
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './WelcomePage.module.css';

const { Title, Text } = Typography;

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

  return (
    <main className={styles.cartPageRoot}>
      {/* Header */}
      <header className={styles.cartHeader}>
        <Avatar size={72} style={{ background: 'linear-gradient(135deg, #6fb1fc 30%, #4364f7 100%)', marginBottom: 12, boxShadow: '0 2px 16px #b3e0ff77' }} icon={<ShoppingCartOutlined style={{ fontSize: 36 }} />} />
        <Typography.Title level={2} className={styles.cartTitle}>
          Welcome, Customer!
        </Typography.Title>
        <Typography.Text className={styles.cartSubtitle}>
          Review and adjust your order below.
        </Typography.Text>
      </header>
      <section className={styles.productListSection}>
        {order.map((item) => (
          <div className={styles.productCard} key={item.key}>
            <div className={styles.productInfo}>
              <Avatar shape="square" size={48} style={{ background: 'linear-gradient(135deg, #e3f0ff 60%, #f7faff 100%)', color: '#4364f7', fontWeight: 700, fontSize: 22, boxShadow: '0 1px 8px #eaeaea' }}>
                {item.item[0]}
              </Avatar>
              <span className={styles.productName}>{item.item}</span>
            </div>
            <div className={styles.quantityControls}>
              <Tooltip title="Decrease">
                <button
                  className={styles.quantityBtn}
                  aria-label={`Decrease quantity of ${item.item}`}
                  onClick={() => handleDecrement(item.key)}
                  disabled={item.quantity === 0}
                >
                  <MinusOutlined />
                </button>
              </Tooltip>
              <span className={styles.quantityValue}>{item.quantity}</span>
              <Tooltip title="Increase">
                <button
                  className={styles.quantityBtn}
                  aria-label={`Increase quantity of ${item.item}`}
                  onClick={() => handleIncrement(item.key)}
                >
                  <PlusOutlined />
                </button>
              </Tooltip>
            </div>
          </div>
        ))}
      </section>
      <section className={styles.actionRow}>
        <Button
          type="primary"
          size="large"
          icon={<CheckCircleOutlined />}
          className={styles.actionBtn}
          onClick={() => handleAction('Add Other Items')}
        >
          Add Other Items
        </Button>
        <Button
          size="large"
          icon={<CloseCircleOutlined />}
          danger
          className={`${styles.actionBtn} ${styles.greenButton}`}
          onClick={() => handleAction('Create New Order')}
        >
          Create New Order
        </Button>
      </section>
      {/* Footer */}
      <footer className={styles.cartFooter}>
        Aryana Shop 2025
      </footer>
    </main>
  );
}
