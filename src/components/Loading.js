import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

const Background = styled.View`
  background-color: rgba(255, 255, 255, 1);
  flex: 1;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Loading = () => (
  <Background>
    <ActivityIndicator size="large" />
  </Background>
);

export default Loading;
