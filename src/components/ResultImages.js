import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import Loading from './Loading';

const Container = styled.ScrollView`
  align-self: center;
`;

const ChangeImage = styled.View`
  margin-top: 5px;
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity``;
const Text = styled.Text``;

const ImageBox = styled.View`
  width: ${({ width }) => width * 0.8}px;
  height: ${({ height }) => height * 0.3}px;
`;

const Image = styled.Image`
  align-self: center;
  flex: 1;
  width: 100%;
  height: 100%;
  /* flex: 1; */
`;

const ResultImages = () => {
  const { height, width } = Dimensions.get(`window`);
  return (
    <Container>
      <ImageBox height={height} width={width}>
        <Loading />
        {/* <Image
          source={{
            uri: `https://reactnative.dev/img/tiny_logo.png`,
          }}
        /> */}
      </ImageBox>
      <ChangeImage>
        <Button>
          <AntDesign name="caretleft" size={34} color="black" />
        </Button>
        <Text>1 / 3</Text>
        <Button>
          <AntDesign name="caretright" size={34} color="black" />
        </Button>
      </ChangeImage>
    </Container>
  );
};

export default ResultImages;
