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

  useEffect(() => {
    // console.log(result);
  }, [result]);

  if (!result) {
    return null;
  }

  return (
    <Container>
      <Title>{result.name}</Title>
      <ResultImages />
    </Container>
  );
};

export default ResultsShowScreen;
