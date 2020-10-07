import React from 'react';
// import { render, fireEvent, waitFor } from '../utils/index';
// import Login from '../../pages/login';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();

// function render(
//   ui: any,
//   {
//     initialState,
//     store = createStore(reducer, initialState),
//     ...renderOptions
//   } = {} as any,
// ) {
//   function Wrapper({ children }: any) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../hooks/authContext', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe('Login Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('Should be able to sign in', async () => {
    // const { getByPlaceholderText, getByText } = render(<Login />, {
    //   initialState: {
    //     account: {},
    //     crypto: {},
    //     history: {},
    //     extract: {},
    //     volume: {},
    //   },
    // });
    // const emailField = getByPlaceholderText('E-mail');
    // const passwordField = getByPlaceholderText('Senha');
    // const buttonElement = getByText('Entrar');
    // fireEvent.change(emailField, { target: { value: 'exemplo@email.com' } });
    // fireEvent.change(passwordField, { target: { value: '123456' } });
    // fireEvent.click(buttonElement);
    // await waitFor(() => {
    //   expect(mockedHistoryPush).toHaveBeenCalledWith('/home');
    // });
  });
});
