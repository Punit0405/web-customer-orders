import React from 'react';
import { Typography, Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './PageHeader.module.css';

const { Title, Text } = Typography;

const PageHeader = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <Avatar
        size={72}
        style={{
          background: 'linear-gradient(135deg, #6fb1fc 30%, #4364f7 100%)',
          marginBottom: 12,
          boxShadow: '0 2px 16px #b3e0ff77'
        }}
        icon={<ShoppingCartOutlined style={{ fontSize: 36 }} />}
      />
      <Title level={2} className={styles.title}>
        {title}
      </Title>
      <Text className={styles.subtitle}>
        {subtitle}
      </Text>
    </header>
  );
};

export default PageHeader;
