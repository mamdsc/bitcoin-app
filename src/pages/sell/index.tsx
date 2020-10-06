import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Button, notification, Skeleton } from 'antd';
import { Container } from './styled';
import Layout from '../../components/layout';
import { IError } from '../../meta-data/interfaces/IError';
import getValidationErrors from '../../utils/getValidationErrors';
import { fetchBalanceRequest } from '../../redux/ducks/account/actions';
import Input from '../../components/input';
import { IAppState } from '../../redux';
import { postSellRequest } from '../../redux/ducks/crypto/actions';

const Sell: React.FC = () => {
  const balance: string = useSelector(
    (state: IAppState) => state.account.balance,
  );
  const isLoadingBalance: boolean = useSelector(
    (state: IAppState) => state.account.isLoadingBalance,
  );

  const [loading, setLoading] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalanceRequest());
  }, [dispatch]);

  const toast = (type: string, message: string, description: string) => {
    // @ts-ignore
    notification[type]({
      message,
      description,
    });
  };

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          amount: Yup.string().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(postSellRequest(parseInt(data.amount)));

        toast('success', 'Depósito efetuado com sucesso', '');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          const error: IError = err;
          toast('error', 'Erro ao depositar', error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch],
  );

  return (
    <Layout>
      <Container>
        <h2>Vender</h2>
        <div className="content">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Qual valor deseja vender?</h2>
            <Input name="amount" placeholder="R$ 0,00" />
            <Button loading={loading} htmlType="submit">
              Confirmar
            </Button>
          </Form>
          <div>
            <h2>Saldo</h2>
            <div>
              {isLoadingBalance ? (
                <Skeleton.Input style={{ width: 200 }} />
              ) : (
                balance
              )}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Sell;
