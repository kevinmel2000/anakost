
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// const deviceStorage = {
  
//     async saveItem(key, value) {
//       try {
//         await AsyncStorage.setItem(key, value);
//       } catch (error) {
//         console.log('AsyncStorage Error: ' + error.message);
//       }
//     }
    
// };

export default class Login extends Component {

    constructor() {
        super() 
        this.state = {
            inputValueEmail : null,
            inputValuePassword : null
        }
    }

    // saveUserToken = async (key, value) => {
    //     try {
    //       await AsyncStorage.setItem(key, value);
    //     } catch (error) {
    //       console.log('AsyncStorage Error: ' + error.message);
    //     }
    // }

    handleLogin = async() => {

        await axios.post('https://anakost-app.herokuapp.com/api/v2/login', {
            email : this.state.inputValueEmail,
            password : this.state.inputValuePassword
        })
        .then((res) => {
            const userToken = res.data.token
            if(userToken) {
                alert('Login Success')
                AsyncStorage.setItem('userToken', userToken)
                this.props.navigation.navigate('Account')
            } else {
                alert('Gagal Masuk, Username / password salah')
                
            }
        })
        .catch(error => {
            alert(error)
        })
        
    }

    render() {
        return (
            // Main Content
            <View style={styles.container}>
                {/* Icon */}
                <TouchableHighlight style={styles.bgIcon}>
                    <Icon name='user-lock' size={50} color='#ededed' />
                </TouchableHighlight>
                
                {/* Form Input */}
                <View style={styles.LoginForm}>
                    <TextInput placeholder="Email Address" style={styles.TextInput} onChangeText={(inputValueEmail) => this.setState({inputValueEmail})} />

                    <TextInput placeholder="Password" secureTextEntry style={styles.TextInput} onChangeText={(inputValuePassword) => this.setState({inputValuePassword})} />

                    <TouchableHighlight onPress={this.handleLogin} style={styles.btnLogin}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableHighlight>
                </View>

                {/* Link Register & Forgot Password */}
                <View style={styles.link}>
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

// Custom Styles
const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    bgIcon : {
        width: 100,
        height:100,
        borderRadius: 150/2,
        backgroundColor: '#cf0e04',
        borderColor: '#bfbfbf',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoginForm : {
        marginVertical: 10,
        marginHorizontal: 20,
        width: '80%',
    },
    TextInput : {
        paddingHorizontal: 15,
        paddingVertical: 6,
        backgroundColor: '#ddd',
        borderRadius: 100/15,
        marginVertical: 8
    },
    btnLogin : {
        paddingHorizontal: 15,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/15,
    },
    textButton : {
        fontSize: 18, 
        color: '#fff', 
        fontWeight: 'bold', 
        textTransform: 'uppercase'
    },
    link : {
        marginHorizontal: 20,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
