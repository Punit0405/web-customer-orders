import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

export default function PublicUserInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      // Simulate API/processing delay
      setTimeout(() => {
        localStorage.setItem('auth_token', token);
        setLoading(false);
        navigate('/home');
      }, 1200);
    } else {
      setLoading(false);
    }
  }, [location, navigate]);

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Spin spinning={loading} size="large" tip="Processing...">
        <h1 style={{marginBottom: 24}}>Welcome to the Aryana Shop</h1>
        <p>Wait for few seconds while we get you the store.</p>
      </Spin>
    </div>
  );
}
