import { Row, Col, Card, Table } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HistoryChart from '../../components/chart';
import Layout from '../../components/layout';
import { IPosition } from '../../meta-data/interfaces/IPosition';
import { IPrice } from '../../meta-data/interfaces/IPrice';
import { IAppState } from '../../redux';
import { fetchBalanceRequest } from '../../redux/ducks/account/actions';
import {
  fetchPositionRequest,
  fetchPricesRequest,
} from '../../redux/ducks/crypto/actions';
import { Container } from './styled';

const Dashboard: React.FC = () => {
  const balance: string = useSelector(
    (state: IAppState) => state.account.balance,
  );
  const isLoadingBalance: boolean = useSelector(
    (state: IAppState) => state.account.isLoadingBalance,
  );
  const prices: IPrice = useSelector((state: IAppState) => state.crypto.prices);
  const isLoadingPrices: boolean = useSelector(
    (state: IAppState) => state.crypto.isLoadingPrices,
  );
  const position: IPosition[] = useSelector(
    (state: IAppState) => state.crypto.position,
  );
  const isLoadingPosition: boolean = useSelector(
    (state: IAppState) => state.crypto.isLoadingPosition,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalanceRequest());
    dispatch(fetchPricesRequest());
    dispatch(fetchPositionRequest());
  }, [dispatch]);

  const columns = [
    {
      title: 'Data da compra',
      dataIndex: 'purchasedDate',
      key: 'purchasedDate',
    },
    {
      title: 'Valor investido',
      dataIndex: 'purchaseAmount',
      key: 'purchaseAmount',
    },
    {
      title: 'Valor do btc compra',
      dataIndex: 'purchasedBtcAmount',
      key: 'purchasedBtcAmount',
    },
    {
      title: 'Percentual de variação',
      dataIndex: 'variation',
      key: 'variation',
    },
    {
      title: 'Valor bruto atual',
      dataIndex: 'currentBtcAmount',
      key: 'currentBtcAmount',
    },
  ];

  return (
    <Layout>
      <Container>
        <h2>Dashboard</h2>

        <HistoryChart />

        <div className="cards">
          <Row gutter={16}>
            <Col span={8}>
              <Card
                title="Saldo disponível em reais"
                bordered={false}
                loading={isLoadingBalance}
              >
                {balance}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Cotação compra"
                bordered={false}
                loading={isLoadingPrices}
              >
                {prices.buyFormated}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Cotação venda"
                bordered={false}
                loading={isLoadingPrices}
              >
                {prices.sellFormated}
              </Card>
            </Col>
          </Row>
        </div>
        <div className="cards">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Bitcoins comprados hoje" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Bitcoins vendidos hoje" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <h2>Meus investimentos</h2>
          <Table
            dataSource={position}
            columns={columns}
            loading={isLoadingPosition}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
