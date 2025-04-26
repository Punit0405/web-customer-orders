import React, { useState } from 'react';
import CategoryTabs from '../components/CategoryTabs/CategoryTabs';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
import styles from './ProductListingPage.module.css';

// Example categories and products (replace with real data/fetch)
const categories = [
  { key: 'fruits', label: 'Fruits' },
  { key: 'vegetables', label: 'Vegetables' },
  { key: 'dairy', label: 'Dairy' },
];

const productsByCategory = {
  fruits: [
    { key: 1, name: 'Apple', price: 30 },
    { key: 2, name: 'Banana', price: 10 },
    { key: 3, name: 'Orange', price: 20 },
  ],
  vegetables: [
    { key: 4, name: 'Carrot', price: 15 },
    { key: 5, name: 'Broccoli', price: 25 },
  ],
  dairy: [
    { key: 6, name: 'Milk', price: 40 },
    { key: 7, name: 'Cheese', price: 60 },
  ],
};

export default function ProductListingPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);
  // Track selected quantity per product across all categories
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [cart, setCart] = useState([]); // Array of {key, name, quantity}

  // Handle quantity change for a product
  const handleQuantityChange = (product, quantity) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [product.key]: quantity,
    }));
  };

  // Add all products with quantity > 0 to cart
  const handleAddAllToCart = () => {
    // Collect all products from all categories
    const allProducts = Object.values(productsByCategory).flat();
    const selected = allProducts
      .filter((p) => selectedQuantities[p.key] > 0)
      .map((p) => ({ key: p.key, name: p.name, quantity: selectedQuantities[p.key] }));
    setCart(selected);
  };

  return (
    <main className={styles.pageRoot}>
      <div className={styles.mainContent}>
        <PageHeader title="Shop by Category" subtitle="Select products and add to your cart." />
        <CategoryTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <ProductGrid
          products={productsByCategory[selectedCategory]}
          quantities={selectedQuantities}
          onQuantityChange={handleQuantityChange}
        />
        <button
          className={styles.addAllBtn}
          onClick={handleAddAllToCart}
        >
          Add to Cart
        </button>
        {cart.length > 0 && (
          <section className={styles.selectedItemsSection}>
            <h3 style={{ marginBottom: '1rem', color: '#4364f7' }}>Selected Items</h3>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {cart.map((item) => (
                <li key={item.key} className={styles.selectedItemRow}>
                  <span className={styles.selectedItemName}>{item.name}</span>
                  <span className={styles.selectedItemQty}>{item.quantity}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <PageFooter />
    </main>
  );
}
