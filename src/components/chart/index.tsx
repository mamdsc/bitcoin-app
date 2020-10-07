import { Skeleton } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { IHistoryPrice } from '../../meta-data/interfaces/IHistoryPrice';
import { IAppState } from '../../redux';
import { Container } from './styled';

const HistoryChart: React.FC = () => {
  const historyPrice: IHistoryPrice[] = useSelector(
    (state: IAppState) => state.history.historyPrice,
  );
  const isLoadingHistoryPrices: boolean = useSelector(
    (state: IAppState) => state.history.isLoadingHistoryPrices,
  );

  return (
    <Container>
      {isLoadingHistoryPrices ? (
        <Skeleton active />
      ) : (
        <ResponsiveContainer>
          <LineChart
            width={1000}
            height={300}
            data={historyPrice}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="createdAt"
              angle={30}
              domain={['dataMin', 'dataMax']}
              height={60}
            />
            <YAxis domain={['dataMin', 'dataMax']} hide />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="buy"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};

export default HistoryChart;
