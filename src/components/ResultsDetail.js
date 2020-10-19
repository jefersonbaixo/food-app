import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.View`
  margin: 8px 10px 8px 0px;
`;

const ItemTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin: 8px 0px;
`;

const SubTitle = styled.Text`
  color: gray;
`;

const Image = styled.Image`
  width: 300px;
  height: 150px;
`;

const ResultsDetail = ({ result }) => (
  <ItemContainer>
    <Image source={{ uri: result.image_url }} />
    <ItemTitle>{result.name}</ItemTitle>
    <SubTitle>
      {result.rating} Stars, {result.review_count} Reviews
    </SubTitle>
  </ItemContainer>
);

export default ResultsDetail;
