import { Skeleton } from 'antd';
import React from 'react';

interface IBalanceProps {
  value: string;
  isLoading: boolean;
}

const Balance: React.FC<IBalanceProps> = ({ value, isLoading }) => {
  return (
    <div>
      <h2>Saldo atual</h2>
      <div>{isLoading ? <Skeleton.Input style={{ width: 200 }} /> : value}</div>
    </div>
  );
};

export default Balance;
