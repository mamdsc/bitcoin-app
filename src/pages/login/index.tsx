import React, { useRef, useCallback, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { Background, Container, Content } from './styled';
import Input from '../../components/input';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/authContext';
import ILogin from '../../meta-data/interfaces/ILogin';
import logo from '../../assets/img/logo.png';
import { IError } from '../../meta-data/interfaces/IError';
import toast from '../../utils/toast';

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ILogin) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
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

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          const error: IError = err;
          toast('error', 'Erro na autenticação', error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <img style={{ height: 200 }} src={logo} alt="logo" />
          <h1>Faça seu login</h1>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button loading={loading} htmlType="submit">
            Entrar
          </Button>
        </Form>
        <Link to="/criar-conta">
          <FiUserPlus />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
