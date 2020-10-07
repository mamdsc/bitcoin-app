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
import {
  fetchBalanceRequest,
  postDepositRequest,
} from '../../redux/ducks/account/actions';
import Input from '../../components/input';
import { IAppState } from '../../redux';
import Balance from '../../components/balance';
import toast from '../../utils/toast';

const Deposit: React.FC = () => {
  const balance: string = useSelector(
    (state: IAppState) => state.account.balance,
  );
  const isLoadingBalance: boolean = useSelector(
    (state: IAppState) => state.account.isLoadingBalance,
  );
  const isLoadingDeposit: boolean = useSelector(
    (state: IAppState) => state.account.isLoadingDeposit,
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

        dispatch(postDepositRequest(Number(data.amount)));
        toast('success', 'Depósito efetuado com sucesso', '');
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
        <h2>Depositar</h2>
        <div className="content">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Digite o valor que deseja depositar</h2>
            <Input name="amount" placeholder="R$ 0,00" />
            <Button loading={isLoadingDeposit} htmlType="submit">
              Confirmar
            </Button>
          </Form>
          <Balance value={balance} isLoading={isLoadingBalance} />
        </div>
      </Container>
    </Layout>
  );
};

export default Deposit;
