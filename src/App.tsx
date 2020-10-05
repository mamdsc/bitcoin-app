import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';
import { AuthProvider } from './hooks/authContext';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
