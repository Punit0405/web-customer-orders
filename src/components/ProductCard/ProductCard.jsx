import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './ProductCard.module.css';

const ProductCard = ({ item, price, quantity, onIncrement, onDecrement }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <Avatar
          shape="square"
          size={48}
          style={{
            background: 'linear-gradient(135deg, #e3f0ff 60%, #f7faff 100%)',
            color: '#4364f7',
            fontWeight: 700,
            fontSize: 22,
            boxShadow: '0 1px 8px #eaeaea'
          }}
        >
          <span className={styles.visuallyHidden}>{item}</span>
          {item[0]}
        </Avatar>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span className={styles.productName}>{item}</span>
          <span className={styles.productPrice}>${price?.toFixed ? price.toFixed(2) : price}</span>
        </div>
      </div>
      <div className={styles.quantityControls}>
        <Tooltip title="Decrease">
          <button
            className={styles.quantityBtn}
            aria-label={`Decrease quantity of ${item}`}
            onClick={onDecrement}
            disabled={quantity === 0}
          >
            <MinusOutlined />
          </button>
        </Tooltip>
        <span className={styles.quantityValue}>{quantity}</span>
        <Tooltip title="Increase">
          <button
            className={styles.quantityBtn}
            aria-label={`Increase quantity of ${item}`}
            onClick={onIncrement}
          >
            <PlusOutlined />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductCard;
