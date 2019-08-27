import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import List from "../screens/Dorm/List";
import BookList from "../screens/Booking/List";
import Profile from "../screens/User/Profile";

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
  
    List : {
      screen : List,
      navigationOptions : {
        tabBarVisible: false,
        tabBarIcon : ({ tintColor }) => (
          <View>
            <Icon name='list-alt' size={20} color={tintColor} />
          </View>
        )
      }
    },
    BookList: {
      screen: BookList,
      navigationOptions:{  
        tabBarVisible: false,
        tabBarLabel:'Book List',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={20} name={'clipboard-list'}/>  
            </View>),  
      }  
    },
    Profile : {
      screen : Profile,
      navigationOptions : {
        tabBarVisible: false,
        tabBarLabel : 'Profile',
        tabBarIcon : ({ tintColor }) => (
          <View>
            <Icon name='user-tie' size={20} color={tintColor} />
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