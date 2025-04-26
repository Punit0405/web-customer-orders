import React, { useState } from 'react';
import { message } from 'antd';
import { CheckCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './WelcomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentOrder, setCurrentOrder } from '../store/orderSlice';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';
import ProductCard from '../components/ProductCard/ProductCard';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

// No local initialOrder, will use Redux last_order/current_order

export default function WelcomePage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastOrder = useSelector((state) => state.order.last_order);

  // Add More Items: load last_order into current_order
  const handleAddMoreItems = () => {
    dispatch(setCurrentOrder(lastOrder));
    navigate('/products');
  };

  // Create New Order: clear current_order
  const handleCreateNewOrder = () => {
    dispatch(clearCurrentOrder());
    navigate('/products');
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
            {lastOrder && lastOrder.length > 0 ? (
              lastOrder.map((item) => (
                <ProductCard
                  key={item.key}
                  item={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  showIncrement={false}
                  showDecrement={false}
                />
              ))
            ) : (
              <div style={{color:'#888', padding:'2rem', textAlign:'center'}}>No previous order found. Start a new order!</div>
            )}
          </section>
          <section className={styles.actionRow}>
            <Button
              type="primary"
              size="large"
              icon={<CheckCircleOutlined />}
              onClick={handleAddMoreItems}
              aria-label="Add More Items"
              disabled={!lastOrder || lastOrder.length === 0}
            >
              Add More Items
            </Button>
            <Button
              size="large"
              icon={<PlusOutlined />}
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
