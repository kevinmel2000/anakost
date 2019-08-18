import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import RegisterScreen from '../RegisterScreen';

class LoginSreen extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#fff',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
                <TouchableHighlight style={{
                    width: 100,
                    height:100,
                    borderRadius: 150/2,
                    backgroundColor: '#cf0e04',
                    borderColor: '#bfbfbf',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon name='user-lock' size={50} color='#ededed' />
                </TouchableHighlight>
                
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 20,
                    width: '80%',
                }}>
                    <TextInput placeholder="Username" style={{
                        paddingHorizontal: 15,
                        paddingVertical: 6,
                        backgroundColor: '#ddd',
                        borderRadius: 100/15,
                        marginVertical: 15,
                    }} />

                    <TextInput placeholder="Password" secureTextEntry style={{
                        paddingHorizontal: 15,
                        paddingVertical: 6,
                        backgroundColor: '#ddd',
                        borderRadius: 100/15,
                    }} />

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Account', { status : 1})} style={{
                        paddingHorizontal: 15,
                        paddingVertical: 6,
                        backgroundColor: '#cf0e04',
                        marginVertical: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100/15,
                    }}>
                        <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Login</Text>
                    </TouchableHighlight>
                </View>

                <View style={{
                    marginHorizontal: 20,
                    width: '80%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{color: '#00d'}}>Create Account</Text>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <Text>Forgot Password?</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Login: {
        screen : LoginSreen,
    },
    Register: {
        screen: RegisterScreen
    }
}, 
{
    initialRouteName: 'Login',
    headerMode: 'none',
})

export default createAppContainer(AppNavigator);