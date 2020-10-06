import { Layout } from 'antd';
import styled from 'styled-components';

export const Container = styled(Layout)`
  height: 100vh;

  .ant-layout-content {
    padding: 50px;
    overflow-y: auto;
  }
`;
