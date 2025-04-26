import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import CommonLayout from './CommonLayout';

export default function PrivateLayout() {
  // Check token in localStorage
  const token = localStorage.getItem('auth_token');

  if (!token) {
    return <Navigate to="/public" replace />;
  }

  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}
