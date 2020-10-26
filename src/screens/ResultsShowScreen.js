import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import yelp from '../api/yelp';
import ResultImages from '../components/ResultImages';

const Container = styled.View``;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 10px 10px;
`;

const Details = styled.Text`
  font-size: 16px;
  margin: 10px 15px;
`;

const Open = styled.Text`
  color: green;
`;

const Closed = styled.Text`
  color: red;
`;

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam(`id`);

  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult();
  }, []);

  if (!result) {
    return null;
  }

  return (
    <Container>
      <Title>{result.name}</Title>
      <ResultImages images={result.photos} />
      <Title>Location:</Title>
      <Details>
        {result.location.address1}, {result.location.city}
      </Details>
      <Details>
        {result.hours[0].is_open_now ? <Open>Open now</Open> : <Closed>Closed now</Closed>}
      </Details>
    </Container>
  );
};

export default ResultsShowScreen;
