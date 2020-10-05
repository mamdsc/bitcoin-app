import React, { useCallback, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Button, notification } from 'antd';
import { Container, Content, Background } from './styled';
import logo from '../../assets/img/logo.png';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { IRegister } from '../../meta-data/interfaces/IRegister';
import Input from '../../components/input';

import { IError } from '../../meta-data/interfaces/IError';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const toast = (type: string, message: string, description: string) => {
    // @ts-ignore
    notification[type]({
      message,
      description,
    });
  };

  const handleSubmit = useCallback(
    async (data: IRegister) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatório')
            .min(6, 'A senha deve conter no mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/account', data);
        history.push('/');
        toast(
          'success',
          'Cadastro realizado com sucesso!',
          'Você já pode logar no sistema',
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          const error: IError = err;
          toast('error', 'Erro no cadastro', error.message);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <img style={{ height: 200 }} src={logo} alt="logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button htmlType="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Register;
