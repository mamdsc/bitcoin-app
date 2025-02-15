import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, Skeleton, Timeline } from 'antd';
import { Container } from './styled';
import Layout from '../../components/layout';
import { IAppState } from '../../redux';
import { IExtract } from '../../meta-data/interfaces/IExtract';
import { fetchExtractRequest } from '../../redux/ducks/extract/actions';
import { ETypeExtract } from '../../meta-data/enums/ETypeExtract';
import { DAY_MONTH_YEAR } from '../../utils/constants';

const { RangePicker } = DatePicker;

const Extract: React.FC = () => {
  const listExtract: IExtract[] = useSelector(
    (state: IAppState) => state.extract.listExtract,
  );
  const isLoadingExtract: boolean = useSelector(
    (state: IAppState) => state.extract.isLoadingExtract,
  );

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (startDate && endDate) {
      dispatch(fetchExtractRequest(startDate, endDate));
    } else {
      dispatch(fetchExtractRequest('', ''));
    }
  }, [dispatch, endDate, startDate]);

  return (
    <Layout>
      <Container>
        <h2>Extrato</h2>

        <h4>Busque por um período:</h4>
        <RangePicker
          format={DAY_MONTH_YEAR}
          onChange={e => {
            setStartDate(e ? e[0]?.toLocaleString() : '');
            setEndDate(e ? e[1]?.toLocaleString() : '');
          }}
        />
        {isLoadingExtract ? (
          <Skeleton active />
        ) : (
          <Timeline mode="left" className="timeline">
            {listExtract && listExtract.length > 0
              ? listExtract.map(extract => {
                  const color =
                    extract.type === ETypeExtract.investment
                      ? 'green'
                      : extract.type === ETypeExtract.liquidation
                      ? 'red'
                      : 'blue';

                  return (
                    <Timeline.Item
                      key={extract.id}
                      label={`(${extract.type}) ${extract.createdAt}`}
                      color={color}
                    >
                      <div>{`Valor: ${extract.value}`}</div>
                    </Timeline.Item>
                  );
                })
              : startDate && endDate && <h3>Não há extrato</h3>}
          </Timeline>
        )}
      </Container>
    </Layout>
  );
};

export default Extract;
