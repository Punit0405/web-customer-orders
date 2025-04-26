import React, { useState } from 'react';
import CategoryTabs from '../components/CategoryTabs/CategoryTabs';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
import styles from './ProductListingPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentOrder } from '../store/orderSlice';
import { useNavigate } from 'react-router-dom';

// Canonical product schema (could be fetched from backend in real app)
const canonicalProducts = [
  { key: 1, name: 'Apple', price: 30, category: 'fruits' },
  { key: 2, name: 'Banana', price: 10, category: 'fruits' },
  { key: 3, name: 'Orange', price: 20, category: 'fruits' },
  { key: 4, name: 'Carrot', price: 15, category: 'vegetables' },
  { key: 5, name: 'Broccoli', price: 25, category: 'vegetables' },
  { key: 6, name: 'Milk', price: 40, category: 'dairy' },
  { key: 7, name: 'Cheese', price: 60, category: 'dairy' },
];

const categories = [
  { key: 'fruits', label: 'Fruits' },
  { key: 'vegetables', label: 'Vegetables' },
  { key: 'dairy', label: 'Dairy' },
];

function getProductsByCategory(products) {
  return categories.reduce((acc, cat) => {
    acc[cat.key] = products.filter(p => p.category === cat.key);
    return acc;
  }, {});
}

export default function ProductListingPage() {
  // Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentOrder = useSelector((state) => state.order.current_order);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  // Map current_order to { [key]: quantity }
  const initialQuantities = React.useMemo(() => {
    const q = {};
    currentOrder.forEach(item => { q[item.key] = item.quantity; });
    return q;
  }, [currentOrder]);
  const [selectedQuantities, setSelectedQuantities] = useState(initialQuantities);

  // Keep selectedQuantities in sync with currentOrder from redux
  React.useEffect(() => {
    setSelectedQuantities(initialQuantities);
  }, [initialQuantities]);

  // All products from canonical schema
  const productsByCategory = React.useMemo(() => getProductsByCategory(canonicalProducts), []);

  // Handle quantity change for a product
  const handleQuantityChange = (product, quantity) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [product.key]: quantity,
    }));
    // Update current_order in redux
    let updatedOrder = canonicalProducts.map((p) =>
      p.key === product.key ? { ...p, quantity } : { ...p, quantity: selectedQuantities[p.key] || 0 }
    );
    // Only keep products with quantity > 0
    updatedOrder = updatedOrder.filter((p) => p.quantity > 0);
    dispatch(setCurrentOrder(updatedOrder));
  };

  // Add all products with quantity > 0 to redux, then go to order review
  const handleAddAllToCart = () => {
    // Build current order from selectedQuantities
    const selected = canonicalProducts
      .filter((p) => selectedQuantities[p.key] > 0)
      .map((p) => ({ ...p, quantity: selectedQuantities[p.key] }));
    dispatch(setCurrentOrder(selected));
    navigate('/order-review');
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
      </div>
      <PageFooter />
    </main>
  );
}
