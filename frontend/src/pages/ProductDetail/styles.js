import styled from 'styled-components/native';
import { TouchableOpacity, StyleSheet } from 'react-native'

export const Container = styled.ScrollView`
  flex: 1;
  background: #efefef;
`;

export const Content = styled.View`
  background: #fff;
  align-items: center;
  padding: 10px 0 10px 0;
`;

export const ImageContent = styled.View`
  width: 300px;
  height: 300px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`; 

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
`; 
export const Separator = styled.View`
  margin-top: 25px;
  align-self: stretch;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 10px 0 10px;
`; 

export const Line = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ccc;
  width: 100%;
`;

export const Information = styled.Text`
  font-size: 16px;
  color: #666;
  padding: 10px;
`;

export const Price = styled.Text`
  font-size: 25px;
  font-weight: bold; 
  padding: 10px;
`;

export const BuyButton = styled(TouchableOpacity)`
  height: 50px;
  width: 85%;
  background-color: #E60014;
  border-radius: 5px;
  margin-top: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BuyButtonText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: #FFF;
`;

export const AmeButton = styled(TouchableOpacity)`
  height: 50px;
  width: 85%;
  background-color: #fff;
  border: 1px solid #E60014;
  border-radius: 5px;
  margin-top: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AmeButtonText = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  color: #E60014;
`;