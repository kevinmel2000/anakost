/*
 * React Native Login Apps
 * 
 */
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';

// Use Icon, Axios, AsyncStorage
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {

    constructor() {
        super() 
        this.state = {
            inputValueEmail : null,
            inputValuePassword : null
        }
    }

    // Handle Login Button
    handleLogin = async() => {

        await axios.post('https://anakost-api.herokuapp.com/api/v2/login', {
            email : this.state.inputValueEmail,
            password : this.state.inputValuePassword
        })
        .then((res) => {
            
            const userToken = res.data.token
            // Check Token
            if(userToken) {
                // Get Data 
                const userAccount = {
                    fullName : res.data.data.fullName,
                    email : res.data.data.email,
                    phone : res.data.data.phone
                }
                alert('Berhasil Masuk. Lanjutkan Bro!')
                // Save to Local Storage
                AsyncStorage.setItem('userToken', userToken)
                AsyncStorage.setItem('userAccount', JSON.stringify(userAccount))

                this.props.navigation.navigate('PrivateStack')
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
                    <TextInput 
                        keyboardType="email-address"
                        placeholder="Alamat Email" 
                        style={styles.TextInput} 
                        onChangeText={(inputValueEmail) => this.setState({inputValueEmail})} 
                    />

                    <TextInput placeholder="Kata Sandi" secureTextEntry style={styles.TextInput} onChangeText={(inputValuePassword) => this.setState({inputValuePassword})} />

                    <TouchableHighlight onPress={this.handleLogin} style={styles.btnLogin}>
                        <Text style={styles.textButton}>Masuk</Text>
                    </TouchableHighlight>
                </View>

                {/* Link Register & Forgot Password */}
                <View style={styles.link}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{color: '#00d'}}>Buat Akun Baru</Text>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <Text>Lupa Password?</Text>
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
