import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: #efefef;
`;

export const Content = styled(TouchableOpacity)`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 180px;
  background-color: #fff;

  flex-direction: row;
  justify-content: space-between;
`;

export const Product = styled.View`
  flex: 1;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
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

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background: #E60014;
  margin-top: 30px;

  justify-content: center;
  align-items: center;
`;

export const ButtonContainerText = styled.Text`
  background-color: #efefef;
  width: 100%;
  height: 75%;
  text-align: center;
  
  font-size: 16px;
  font-weight: bold;
  color: #333;
  
`;



