import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton, Timeline } from 'antd';
import { Container } from './styled';
import Layout from '../../components/layout';
import { IAppState } from '../../redux';
import { IExtract } from '../../meta-data/interfaces/IExtract';
import { fetchExtractRequest } from '../../redux/ducks/extract/actions';
import { ETypeExtract } from '../../meta-data/enums/ETypeExtract';

const Extract: React.FC = () => {
  const listExtract: IExtract[] = useSelector(
    (state: IAppState) => state.extract.listExtract,
  );
  const isLoadingExtract: boolean = useSelector(
    (state: IAppState) => state.extract.isLoadingExtract,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExtractRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <h2>Extrato</h2>
        {isLoadingExtract ? (
          <Skeleton active />
        ) : (
          <Timeline mode="left">
            {listExtract &&
              listExtract.map(extract => (
                <Timeline.Item
                  label={`(${extract.type}) ${extract.createdAt}`}
                  color={
                    extract.type === ETypeExtract.investment
                      ? 'green'
                      : extract.type === ETypeExtract.liquidation
                      ? 'red'
                      : 'blue'
                  }
                >
                  <div>{`Valor: ${extract.value}`}</div>
                </Timeline.Item>
              ))}
          </Timeline>
        )}
      </Container>
    </Layout>
  );
};

export default Extract;
