import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Button, notification, Skeleton, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Container } from './styled';
import Layout from '../../components/layout';
import { IError } from '../../meta-data/interfaces/IError';
import getValidationErrors from '../../utils/getValidationErrors';
import { fetchBalanceRequest } from '../../redux/ducks/account/actions';
import Input from '../../components/input';
import { IAppState } from '../../redux';
import { postPurchaseRequest } from '../../redux/ducks/crypto/actions';
import { formatCurrency } from '../../utils/formatCurrency';

const { confirm } = Modal;

const Purchase: React.FC = () => {
  const balance: string = useSelector(
    (state: IAppState) => state.account.balance,
  );
  const isLoadingBalance: boolean = useSelector(
    (state: IAppState) => state.account.isLoadingBalance,
  );
  const buy: number = useSelector(
    (state: IAppState) => state.crypto.prices.buy,
  );
  const isLoadingPurchase: boolean = useSelector(
    (state: IAppState) => state.crypto.isLoadingPurchase,
  );

  const [amountValue, setAmountValue] = useState<number>(0);

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
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          amount: Yup.string().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(postPurchaseRequest(parseInt(data.amount)));
        toast('success', 'Compra efetuada com sucesso', '');
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

  const showConfirm = () => {
    confirm({
      title: `A compra de ${amountValue} bitcoins equivale á`,
      icon: <ExclamationCircleOutlined />,
      content: `${formatCurrency(buy * amountValue)}`,
      okText: <div>Continuar</div>,
      cancelText: <div>Desistir</div>,
      onOk() {
        if (formRef && formRef.current) {
          formRef.current.submitForm();
        }
      },
    });
  };

  return (
    <Layout>
      <Container>
        <h2>Comprar</h2>
        <div className="content">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Quantos bitcoins deseja comprar?</h2>
            <Input
              name="amount"
              placeholder="0"
              type="number"
              onChange={e => setAmountValue(parseInt(e.target.value))}
            />
            <Button loading={isLoadingPurchase} onClick={showConfirm}>
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

export default Purchase;
