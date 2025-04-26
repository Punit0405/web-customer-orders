import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProductListingPage from './pages/ProductListingPage';
import OrderReviewPage from './pages/OrderReviewPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import PublicPage from './PublicPage';
import PublicUserInfoPage from './pages/PublicUserInfoPage';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private route: needs token in URL */}
        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<WelcomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/order-review" element={<OrderReviewPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
        </Route>
        {/* Public route: fallback */}
        <Route element={<PublicLayout />}>
          <Route path="/public" element={<PublicUserInfoPage />} />
        </Route>
        {/* Catch-all: redirect to public */}
        <Route path="*" element={<Navigate to="/public" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
