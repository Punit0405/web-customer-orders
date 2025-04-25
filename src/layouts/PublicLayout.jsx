import React from 'react';
import { Outlet } from 'react-router-dom';
import CommonLayout from './CommonLayout';

export default function PublicLayout() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}
