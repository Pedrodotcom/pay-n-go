import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Departaments from './pages/Departaments';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import More from './pages/More';

import ProductDetail from './pages/ProductDetail';

import  { AntDesign, FontAwesome5, SimpleLineIcons, Feather }  from '@expo/vector-icons/';

const Routes = createAppContainer(

  createBottomTabNavigator({
    Stack: {
      screen: createStackNavigator(
        {
          Home: {
            screen: Home,
            navigationOptions: {
              headerTransparent: true,
            },
          },
          ProductDetail: {
            screen: ProductDetail,
            navigationOptions: {
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#E60014"
              }
            }
          }
        }, {
          headerMode: "screen",
          defaultNavigationOptions: {
            headerTintColor: "#FFF",
            headerTitle: "",
          }, 
        }
      ), navigationOptions: {
        tabBarLabel: 'destaques',
        tabBarIcon:  (
          <AntDesign 
            name="staro"
            size={20}
            color="#666"
          />
        )
      }
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
    
  }, {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: "#E60014"
    }
  }),

)

export default Routes;