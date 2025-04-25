import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default function CommonLayout({ children }) {
  console.log(children)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
        Aryana Shop
      </Header>
      <Content style={{ padding: '24px 16px 0', background: '#f5f5f5' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Aryana Shop ©2025
      </Footer>
    </Layout>
  );
}
