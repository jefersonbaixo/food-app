import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

// TODO - Find places by location

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Error = styled.Text`
  color: red;
`;
const ScrollView = styled.ScrollView``;

const errorMessage = (error) => (error ? <Error>{error}</Error> : null);

const SearchScreen = () => {
  const [term, setTerm] = useState(``);
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return price === result.price;
    });
  };
  // TODO - Fix location problem on android
  // TODO - Fix ScrollView problem on android
  return (
    <Container>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage(error)}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice(`$`)} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice(`$$`)} />
        <ResultsList title="Big Spender" results={filterResultsByPrice(`$$$`)} />
      </ScrollView>
    </Container>
  );
};

export default SearchScreen;
