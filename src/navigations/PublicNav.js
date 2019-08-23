import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home/Home";
import Login from "../screens/Authorization/Login";

const BottomNavigator = createMaterialBottomTabNavigator({
    Home : {
      screen : Home,
      navigationOptions : {
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
        tabBarLabel : 'Login',
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
barStyle: {
    backgroundColor: '#cf0e04'
}
})

export default createAppContainer(BottomNavigator);