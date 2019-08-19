
import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import IklanScreen from './src/screens/AdScreen';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import BookScreen from './src/screens/BookScreen';
import BookListScreen from './src/screens/BookListScreen';
import AccountScreen from './src/screens/AccountScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';

const StackHome = createStackNavigator({
  Home : {
    screen : HomeScreen
  },
  Iklan : {
    screen : IklanScreen
  }
},
{
  headerMode: 'none'
})

const StackList = createStackNavigator({
  List : {
    screen : ListScreen
  },
  Detail : {
    screen : DetailScreen
  }
},
{
  headerMode : 'none'
})

const StackAccount = createStackNavigator({
  Account : {
    screen : AccountScreen
  },
  Register : {
    screen : RegisterScreen
  },
  Login : {
    screen : LoginScreen
  }
},
{
  headerMode: 'none'
})

const StackBook = createStackNavigator({
  BookList : {
    screen : BookListScreen
  },
  Book : {
    screen : BookScreen
  },
},
{
  initialRouteName : 'Book',
  headerMode: 'none'
})

const BottomNavigator = createMaterialBottomTabNavigator({
  Home : {
    screen : StackHome,
    navigationOptions : {
      tabBarIcon : ({ tintColor }) => (
        <View>
          <Icon name='home' size={20} color={tintColor} />
        </View>
      )
    }
  },

  List : {
    screen : StackList,
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
    screen: StackBook,
    navigationOptions:{  
      tabBarVisible: false,
      tabBarLabel:'Book List',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={20} name={'clipboard-list'}/>  
          </View>),  
    }  
  },
  Account : {
    screen : StackAccount,
    navigationOptions : {
      tabBarVisible: false,
      tabBarLabel : 'Account',
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





// import React from 'react';
// import {View} from 'react-native';
// import {createAppContainer} from "react-navigation";
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// import HomeScreen from './src/screens/HomeScreen';
// import ListScreen from './src/screens/ListScreen';
// import AccountScreen from "./src/screens/AccountScreen";
// import BookListScreen from './src/screens/BookListScreen';

// const BottomNavigator = createMaterialBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions:{  
//       tabBarLabel:'Home',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={20} name={'home'}/>  
//           </View>),  
//     }
//   },
//   List: {
//     screen: ListScreen,
//     navigationOptions:{  
//       tabBarLabel:'Whishlist',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={20} name={'list-alt'}/>  
//           </View>),  
//     }
//   },
//   BookList: {
//     screen: BookListScreen,
//     navigationOptions:{  
//       tabBarLabel:'Book List',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={20} name={'clipboard-list'}/>  
//           </View>),  
//     }  
//   },
//   Account: {
//     screen: AccountScreen,
//     navigationOptions:{  
//       tabBarLabel:'Account',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={20} name={'user-tie'}/>  
//           </View>),  
//     }  
//   }
// },
// {
//   barStyle: {
//     backgroundColor: '#cf0e04'
//   }
// });

// export default createAppContainer(BottomNavigator);