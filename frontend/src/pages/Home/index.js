import React from 'react';

import { Container, Content, Product, Image, Detail, Description, Price, ButtonContainer } from './styles';

import Header from '../../components/Header'

export default function Home() {
  return (  
    <>  
    <Header />
    <Container>
      <Content>
        <Product>
          <Image source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/item/19581/7/19581722_1GG.jpg" }} />
        </Product>
        <Detail>
          <Description>Bis ao leite cx c/20 126G Lacta</Description>
          <Price>R$ 5,15</Price>
          <ButtonContainer></ButtonContainer>
        </Detail>
      </Content>
    </Container>
    </>
  );
}
