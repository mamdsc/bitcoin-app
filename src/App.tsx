import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';
import { AuthProvider } from './hooks/authContext';
import { store } from './redux';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

export default App;
