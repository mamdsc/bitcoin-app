import { Layout } from 'antd';
import styled from 'styled-components';

export const Container = styled(Layout)`
  height: 100vh;

  .ant-layout-content {
    padding: 50px;
    overflow-y: auto;
  }

  .ant-layout-header {
    background-color: #000;
    color: #fff;
    height: 65px;
  }

  .ant-menu {
    background-color: #000;
    color: #fff;

    .ant-menu-item:hover {
      color: #f9d697;
      border-color: #f9d697;
    }
  }
`;
