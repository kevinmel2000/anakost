import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Home from "../screens/Home";
import Login from "../screens/Authentication/Login";

const BottomNavigator = createBottomTabNavigator({
    Home : {
      screen : Home,
      navigationOptions : {
        tabBarLabel: 'Beranda',
        tabBarIcon : ({ tintColor }) => (
          <View>
            <Icon name='home' size={20} color={tintColor} />
          </View>
        )
      }
    },
  
    Login : {
      screen : Login,
      navigationOptions : {
        tabBarVisible: false,
        tabBarLabel : 'Masuk',
        tabBarIcon : ({ tintColor }) => (
          <View>
            <Icon name='user-lock' size={20} color={tintColor} />
          </View>
        )
      }
    }
},
{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#cfcfcf',
    style : {
      backgroundColor: '#cf0e04'
    }
  },
  tabStyle: {
      backgroundColor: '#cf0e04'
  }
})

export default createAppContainer(BottomNavigator);