import React, { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import api from '../../services/api';

import basketImg from '../../assets/basketImg.png';

import {
  Container,
  BasketContent,
  ContainerProducts,
  Content,
  Product,
  ProductImage,
  Detail,
  Description,
  Amount,
  DetailPrice,
  Price,
  TotalPrice,
  ContainerButton,
  TotalCart,
  TotalCartText,
  TotalCartPrice,
  BuyButton,
  BuyButtonText
} from './styles';

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    async function loadCartProducts(){
      const response = await api.get('cart');

      setCartProducts(response.data);
    }

    loadCartProducts();
  }, [])

  return (
    <>
      <Container>
        <BasketContent>
          <Image source={basketImg} />
        </BasketContent>
      </Container>
      <ContainerProducts>
        <FlatList 
          data={cartProducts}
          keyExtractor={cartProducts => String(cartProducts.id)}
          // keyExtractor={(product) => product.id}
          renderItem={({ item: cartProducts }) => (
            <Content
              onPress={() => {
                navigation.navigate("ProductDetail", {
                  product: product
                });
              }}
            >
              <Product>
                <ProductImage source={{ uri: cartProducts.image }} />
              </Product>
              <Detail>
                <Description>{cartProducts.description}</Description>
                <Amount>{ cartProducts.amount } Unidades</Amount>
              </Detail>
              <DetailPrice>
                <Price>
                  { Intl.NumberFormat("pt-BR", { 
                    style: "currency", 
                    currency: "BRL" 
                  }).format(cartProducts.price)}
                </Price>
                <TotalPrice>
                  { Intl.NumberFormat("pt-BR", { 
                    style: "currency", 
                    currency: "BRL" 
                  }).format(cartProducts.price * cartProducts.amount)}
                </TotalPrice>
              </DetailPrice>
            </Content>
          )}
        />
      </ContainerProducts>

      <ContainerButton>
        <TotalCart>
          <TotalCartText>Total do pedido</TotalCartText>
          <TotalCartPrice>R$29,60</TotalCartPrice>
        </TotalCart>
        <BuyButton>
          <BuyButtonText>Finalizar</BuyButtonText>
        </BuyButton>
      </ContainerButton>
    </>
  );
}
