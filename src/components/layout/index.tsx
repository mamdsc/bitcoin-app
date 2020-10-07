import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { Container } from './styled';
import { useAuth } from '../../hooks/authContext';

const { Header, Content, Footer } = Layout;

const LayoutContainer: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" className="menu-header">
          <Menu.Item key="1" onClick={() => history.push('/home')}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" onClick={() => history.push('/depositar')}>
            Depósitos
          </Menu.Item>
          <Menu.Item key="3" onClick={() => history.push('/comprar')}>
            Compra
          </Menu.Item>
          <Menu.Item key="4" onClick={() => history.push('/vender')}>
            Venda
          </Menu.Item>
          <Menu.Item key="5" onClick={() => history.push('/extrato')}>
            Extrato
          </Menu.Item>
          <Menu.Item key="6" onClick={signOut} style={{ float: 'right' }}>
            Sair
          </Menu.Item>
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
