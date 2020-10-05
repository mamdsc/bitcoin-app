import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import ILogin from '../meta-data/interfaces/ILogin';

interface IAuthContext {
  token: string;
  signIn(credentials: ILogin): Promise<void>;
  signOut(): void;
}

interface IAuthState {
  token: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [dataAuth, setDataAuth] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@BitcoinApp:token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', {
      email,
      password,
    });

    const { token } = response.data;

    localStorage.setItem('@BitcoinApp:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setDataAuth({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@BitcoinApp:token');
    setDataAuth({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: dataAuth.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth precisa ser usado com AuthProvider');
  }

  return context;
}
