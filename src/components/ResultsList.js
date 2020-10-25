import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const Container = styled.View`
  margin: 0px 0px 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const List = styled(FlatList)``;

const Touchable = styled(TouchableOpacity)``;

const ResultsList = ({ title, results, navigation }) => (
  <Container>
    <Title>{title}</Title>
    <List
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
          <Touchable onPress={() => navigation.navigate(`ResultsShow`, { id: item.id })}>
            <ResultsDetail result={item} />
          </Touchable>
        );
      }}
    />
  </Container>
);

export default withNavigation(ResultsList);
