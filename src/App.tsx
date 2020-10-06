import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';
import { AuthProvider } from './hooks/authContext';
import { store, persistor } from './redux';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
