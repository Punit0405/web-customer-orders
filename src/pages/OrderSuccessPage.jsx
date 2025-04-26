import React from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './OrderSuccessPage.module.css';

export default function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.successRoot}>
      <div className={styles.successCard}>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: 64, marginBottom: 24 }} />
        <h1 className={styles.title}>Order Confirmed!</h1>
        <p className={styles.subtitle}>Thank you for your purchase. Your order has been placed successfully.</p>
        <Button type="primary" size="large" onClick={() => navigate('/home')}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
