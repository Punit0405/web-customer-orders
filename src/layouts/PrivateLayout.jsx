import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import CommonLayout from './CommonLayout';

export default function PrivateLayout() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');
  
  if (!token) {
    return <Navigate to="/public" replace />;
  }

  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}
