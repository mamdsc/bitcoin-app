import { Row, Col, Card } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout';
import { IPrice } from '../../meta-data/interfaces/IPrice';
import { IAppState } from '../../redux';
import { fetchBalanceRequest } from '../../redux/ducks/account/actions';
import { fetchPricesRequest } from '../../redux/ducks/crypto/actions';
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalanceRequest());
    dispatch(fetchPricesRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Container>
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
                {prices.buy}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Cotação venda"
                bordered={false}
                loading={isLoadingPrices}
              >
                {prices.sell}
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
      </Container>
    </Layout>
  );
};

export default Dashboard;
