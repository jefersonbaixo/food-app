import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

const Background = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  justify-content: center;
`;

const Loading = () => (
  <Background>
    <ActivityIndicator size="large" />
  </Background>
);

export default Loading;
