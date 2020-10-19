import React from 'react';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

const Container = styled.View`
  background-color: #e6e6e6;
  margin: 15px 15px;
  border-radius: 5px;
  flex-direction: row;
  height: 50px;
  padding: 0px 5px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  margin-left: 10px;
`;

const Icon = styled(Feather)`
  font-size: 35px;
  align-self: center;
  margin: 0px 0px;
`;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <Container>
      <Icon name="search" />
      <Input
        autofocus
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </Container>
  );
};

export default SearchBar;
