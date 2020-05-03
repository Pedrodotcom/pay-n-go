import React from 'react';
import { Image, ScrollView } from 'react-native';

import { 
  Container, 
  Content,
  ImageContent, 
  ProductImage, 
  Description, 
  Separator, 
  Line, 
  Information, 
  Price, 
  BuyButton, 
  BuyButtonText, 
  AmeButton,
  AmeButtonText
} from './styles';

import  { SimpleLineIcons }  from '@expo/vector-icons/';

import ame from '../../assets/ame.png'

export default function ProductDetail({ navigation }) {
  const product = navigation.getParam("product");

  return (
    <Container>
      <Content>
        <ImageContent>
          <ProductImage source={{ uri: product.image }}/>
        </ImageContent>
        <Description>{product.description}</Description>
        <Separator>
          <Line />
          <Information>Retire na loja agora mesmo</Information>

          <Price>R$ 5,74</Price>
          <Line />
        </Separator>

        <BuyButton>
          <SimpleLineIcons 
            name="handbag"
            size={20}
            color="#fff"
          />
          <BuyButtonText>comprar</BuyButtonText>
        </BuyButton>

        <AmeButton>
          <AmeButtonText>compre com</AmeButtonText>
          <Image source={ame} />
        </AmeButton>

      </Content>
    </Container>
  );
}
