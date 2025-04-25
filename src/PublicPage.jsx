import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function PublicPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: 48 }}>
      <Title level={3}>Welcome to Aryana Shop</Title>
      <Paragraph>
        Please access your order link from your mobile to view your orders.
      </Paragraph>
    </div>
  );
}
