import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products, quantities, onQuantityChange }) {
  return (
    <section className={styles.gridSection}>
      {products.map((product) => (
        <div key={product.key} className={styles.gridItem}>
          <ProductCard
            item={product.name}
            price={product.price}
            quantity={quantities[product.key] || 0}
            onIncrement={() => onQuantityChange(product, (quantities[product.key] || 0) + 1)}
            onDecrement={() => onQuantityChange(product, Math.max((quantities[product.key] || 0) - 1, 0))}
          />
        </div>
      ))}
    </section>
  );
}
