import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class RegisterScreen extends Component {

    render() {
        
        const role = this.props.navigation.getParam('role', 0);

        if(role === 1){
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
                        <Icon name='user-secret' size={50} color='#ededed' />
                    </TouchableHighlight>
                    
                    <View style={{
                        marginVertical: 10,
                        marginHorizontal: 20,
                        width: '80%',
                        marginTop: 10,
                    }}>
                        <TextInput placeholder="Full Name" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />

                        <TextInput placeholder="Email Address" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />

                        <TextInput placeholder="Username" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />

                        <TextInput placeholder="AgenID" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />
    
                        <TextInput placeholder="Password" secureTextEntry style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />
    
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#cf0e04',
                            marginVertical: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100/15,
                        }}>
                            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Register</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        marginHorizontal: 20,
                        width: '80%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Register', {role: 0})}>
                            <Text style={{color: '#00d'}}>Create User Account</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{color: '#00910a'}}>Login Account</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        } else {
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
                        <Icon name='user-plus' size={50} color='#ededed' />
                    </TouchableHighlight>
                    
                    <View style={{
                        marginVertical: 10,
                        marginHorizontal: 20,
                        width: '80%',
                    }}>
                        <TextInput placeholder="Full Name" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />

                        <TextInput placeholder="Email Address" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />

                        <TextInput placeholder="Username" style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />
    
                        <TextInput placeholder="Password" secureTextEntry style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#ddd',
                            borderRadius: 100/15,
                            marginVertical: 7,
                        }} />
    
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={{
                            paddingHorizontal: 15,
                            paddingVertical: 6,
                            backgroundColor: '#cf0e04',
                            marginVertical: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100/15,
                        }}>
                            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Register</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        marginHorizontal: 20,
                        width: '80%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Register', {role: 1})}>
                            <Text style={{color: '#00d'}}>Create Owner Account</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{color: '#00910a'}}>Login Account</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }
    }
}

