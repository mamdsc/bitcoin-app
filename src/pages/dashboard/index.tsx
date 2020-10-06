import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../../redux';
import { fetchBalanceRequest } from '../../redux/ducks/account/actions';
import { Container } from './styled';

const Dashboard: React.FC = () => {
  const balance: string = useSelector(
    (state: IAppState) => state.account.balance,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalanceRequest());
  }, [dispatch]);

  return (
    <Container>
      <div>
        Saldo:
        {balance}
      </div>
    </Container>
  );
};

export default Dashboard;
