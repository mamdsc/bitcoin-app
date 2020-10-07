import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Button } from 'antd';
import { Container } from './styled';
import Layout from '../../components/layout';
import { IError } from '../../meta-data/interfaces/IError';
import getValidationErrors from '../../utils/getValidationErrors';
import { fetchBalanceRequest } from '../../redux/ducks/account/actions';
import Input from '../../components/input';
import { IAppState } from '../../redux';
import { postSellRequest } from '../../redux/ducks/crypto/actions';
import Balance from '../../components/balance';
import toast from '../../utils/toast';

const Sell: React.FC = () => {
  const balance: string = useSelector(
    (state: IAppState) => state.account.balance,
  );
  const isLoadingBalance: boolean = useSelector(
    (state: IAppState) => state.account.isLoadingBalance,
  );
  const isLoadingSell: boolean = useSelector(
    (state: IAppState) => state.crypto.isLoadingSell,
  );

  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalanceRequest());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          amount: Yup.string().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(postSellRequest(Number(data.amount)));
        toast('success', 'Venda efetuada com sucesso', '');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          const error: IError = err;
          toast('error', 'Erro ao depositar', error.message);
        }
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
            <Button loading={isLoadingSell} htmlType="submit">
              Confirmar
            </Button>
          </Form>
          <Balance value={balance} isLoading={isLoadingBalance} />
        </div>
      </Container>
    </Layout>
  );
};

export default Sell;
