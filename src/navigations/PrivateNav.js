import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Home from "../screens/Home";
import List from "../screens/Dorm/List";
import BookList from "../screens/Booking/List";
import Profile from "../screens/User/Profile";

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
  
    List : {
      screen : List,
      navigationOptions : {
        tabBarLabel: 'Daftar Kost',
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
        tabBarLabel:'Pesanan',  
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
        tabBarLabel : 'Profil',
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