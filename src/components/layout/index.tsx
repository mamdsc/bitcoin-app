import React from 'react';
import { Layout, Menu } from 'antd';
import { Container } from './styled';

const { Header, Content, Footer } = Layout;

const LayoutContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Dashboard</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Mariana Souza 2020</Footer>
    </Container>
  );
};

export default LayoutContainer;
