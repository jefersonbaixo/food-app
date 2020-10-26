import React, { useEffect, useState } from 'react';
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
`;

const ResultImages = ({ images }) => {
  const [isLoading, setLoading] = useState(false);
  const [imagesList, setImagesList] = useState(images);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { height, width } = Dimensions.get(`window`);

  const changeIndex = (value) => {
    if (selectedIndex + value < 0) {
      setSelectedIndex(imagesList.length - 1);
      return;
    }
    setSelectedIndex((selectedIndex + value) % imagesList.length);
  };

  useEffect(() => {
    setImagesList(images);
  }, []);

  return (
    <Container>
      <ImageBox height={height} width={width}>
        {isLoading && <Loading />}
        <Image
          source={{ uri: imagesList[selectedIndex] }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </ImageBox>
      <ChangeImage>
        <Button onPress={() => changeIndex(-1)}>
          <AntDesign name="caretleft" size={34} color="black" />
        </Button>
        <Text>
          {selectedIndex + 1} / {imagesList.length}
        </Text>
        <Button onPress={() => changeIndex(1)}>
          <AntDesign name="caretright" size={34} color="black" />
        </Button>
      </ChangeImage>
    </Container>
  );
};

export default ResultImages;
