import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background: #efefef;
`;

export const BasketContent = styled.View`
  width: 72px;
  height: 72px;
  background: #E60014;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 36px;
`;

export const ContainerProducts = styled.View`
  flex: 1;
  align-items: center;
  background: #efefef;
`;

export const Content = styled(TouchableOpacity)`
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  width: 360px;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  border-width: 1px;
  border-color: #c4c4c4;

  flex-direction: row;
  justify-content: space-between;
`;

export const Product = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Detail = styled.View`
  flex: 1;
  /* padding: 5px; */
  flex-direction: column;
`;

export const Description = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const Amount = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: #c9c9c9;
`;

export const DetailPrice = styled.View`
  flex: 1;
  /* padding: 5px; */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Price = styled.Text`
  font-size: 11px;
  margin: 20px 15px 0 0;
`;

export const TotalPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 0 15px 15px 0;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  background: #efefef;
`;

export const TotalCart = styled.View`
  height: 50px;
  width: 75%;
  background: #fff;
  border-color: #c4c4c4;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const TotalCartText = styled.Text`
  font-size: 16px;
`;

export const TotalCartPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const BuyButton = styled(TouchableOpacity)`
  height: 50px;
  width: 85%;
  background-color: #E60014;
  border-radius: 10px;
  margin-bottom: 15px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BuyButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  color: #FFF;
`;
