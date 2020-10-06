import { Row, Col, Card } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout';
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
    <Layout>
      <Container>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Saldo disponível em reais" bordered={false}>
                {balance}
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
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
