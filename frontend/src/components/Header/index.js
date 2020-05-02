import React from 'react';
import { Image, Text, TextInput } from 'react-native';

import { Container, LogoContent, InputContent, Icon, Input } from './styles';

import  { Feather }  from '@expo/vector-icons/';

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
      <LogoContent>
        <Image source={logo} />
      </LogoContent>
      <InputContent>
        <Input>
          <Icon>
            <Feather 
              name="search"
              size={20}
              color="#666"            
            />
          </Icon>

          <TextInput 
            placeholder="teem tuuudo, pode procurar :)"
            // value={}
            returnKeyType="send"
            onPress={() => {}}
          />
          </Input>
      </InputContent>
      
    </Container>
  );
}
