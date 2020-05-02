import React from 'react';
import { Text } from 'react-native' 
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

//import { createStackNavigator } from 'react-navigation-stack';


import Home from './pages/Home';
import Departaments from './pages/Departaments';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import More from './pages/More';


import ProductList from './pages/ProductList';

import  { AntDesign, FontAwesome5, SimpleLineIcons, Feather }  from '@expo/vector-icons/';



const Routes = createAppContainer(
  // createStackNavigator({
  //   Home,
  //   ProductList
  // })

  createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'destaques',
        tabBarIcon:  (
          <AntDesign 
            name="staro"
            size={20}
            color="#666"
          />
        )
      },
    },
    Departaments: {
      screen: Departaments,
      navigationOptions: {
        tabBarLabel: 'departamentos',
        tabBarIcon: (
        <FontAwesome5 
          name="clipboard-list"
          size={20}
          color="#666"
        />
        )
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: 'cesta',
        tabBarIcon: (
        <SimpleLineIcons 
          name="handbag"
          size={20}
          color="#666"
        />
        )
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'favoritos',
        tabBarIcon: (
        <AntDesign 
          name="hearto"
          size={20}
          color="#666"
        />
        )
      }
    },
    More: {
      screen: More,
      navigationOptions: {
        tabBarLabel: 'Mais',
        tabBarIcon: (
          <Feather 
            name="more-horizontal"
            size={20}
            color="#666"
          />
        )
      }
    },
    //ProductList,
  }, {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: "#E60014"
    }
  })

)

export default Routes;