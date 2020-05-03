import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native'
import api from '../../services/api';

import { Container, Content, Product, Image, Detail, Description, Price, ButtonContainer, ButtonContainerText } from './styles';

import Header from '../../components/Header'

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts(){
      const response = await api.get('products');

      setProducts(response.data);

      console.log(response.data);
      
    }

    loadProducts();
  }, [])

  return (  
    <>  
    <Header />
    <Container>
    <FlatList 
      data={products}
      keyExtractor={product => product.id}
      // keyExtractor={(product) => product.id}
      renderItem={({ item: product }) => (
        <Content
          onPress={() => {
            navigation.navigate("ProductDetail", {
              product: product
            });
          }}
        >
          <Product>
            <Image source={{ uri: product.image }} />
          </Product>
          <Detail>
            <Description>{product.description}</Description>
            <Price>
              { Intl.NumberFormat("pt-BR", { 
                style: "currency", 
                currency: "BRL" 
              }).format(product.price)}
            </Price>
            <ButtonContainer>
              <ButtonContainerText>ver online</ButtonContainerText>
            </ButtonContainer>
          </Detail>
        </Content>
      )}
    />
    </Container>
    </>
  );
}
