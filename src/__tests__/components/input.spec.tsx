import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../components/input/index';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input Component', () => {
  it('Should be able to render an input', async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="e-mail" title="E-mail" />,
    );

    expect(getByPlaceholderText('e-mail')).toBeTruthy();
  });

  // it('Should render highlight on input focus', async () => {
  //   const { getByPlaceholderText, getByTestId } = render(
  //     <Input name="email" placeholder="e-mail" title="E-mail" />,
  //   );

  //   const inputElement = getByPlaceholderText('e-mail');
  //   const containerElement = getByTestId('input-container');

  //   fireEvent.focus(inputElement);

  //   await waitFor(() => {
  //     expect(containerElement).toHaveStyle('border-color: #577c9e;');
  //   });

  //   fireEvent.blur(inputElement);

  //   await waitFor(() => {
  //     expect(containerElement).not.toHaveStyle('color: #577c9e;');
  //   });
  // });
});
