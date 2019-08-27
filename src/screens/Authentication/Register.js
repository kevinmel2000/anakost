/*
 * React Native Reguster Apps
 * 
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            inputValueName: '',
            inputValueEmail: '',
            inputValuePhone: '',
            inputValuePassword: ''
        }
    }

    _handleRegister() {

        let name = this.state.inputValueName
        let email = this.state.inputValueEmail
        let phone = this.state.inputValuePhone
        let password = this.state.inputValuePassword

        if(name == '' || email == '' || phone == '' || password == '') {

            alert('Registrasi Gagal, Data tidak lengkap!')

        } else {

            axios.post('https://anakost-api.herokuapp.com/api/v2/register', {
                fullName: name,
                email: email,
                phone: phone,
                password: password,
            })
            .then(res => {
                alert('Berhasil Daftar!')
                this.props.navigation.navigate('Login')
            })
            .catch(function (error) {
                console.log(error);
            });

        }

        
    }

    render() {

        return (
            // Main Content
            <View style={styles.container}>
                {/* Icon */}
                <TouchableHighlight style={styles.bgIcon}>
                    <Icon name='user-plus' size={50} color='#ededed' />
                </TouchableHighlight>
                
                {/* Form Input */}
                <View style={styles.RegisterForm}>
                    <TextInput placeholder="Nama Lengkap" style={styles.textInput} onChangeText={(inputValueName) => this.setState({inputValueName})} />

                    <TextInput placeholder="Alamat Email" style={styles.textInput} onChangeText={(inputValueEmail) => this.setState({inputValueEmail})} keyboardType='email-address' autoCapitalize='none' />

                    <TextInput placeholder="No Telpon (089xxx)" style={styles.textInput} onChangeText={(inputValuePhone) => this.setState({inputValuePhone})} keyboardType='numeric' />

                    <TextInput placeholder="Kata Sandi" secureTextEntry style={styles.textInput} onChangeText={(inputValuePassword) => this.setState({inputValuePassword})} />

                    <TouchableHighlight onPress={this._handleRegister.bind(this)} style={styles.btnRegister}>
                        <Text style={styles.textButton}>Daftar</Text>
                    </TouchableHighlight>
                </View>

                {/* Link Login */}
                <View style={styles.linkLogin}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{color: '#00910a'}}>Sudah punya akun? Masuk disini</Text>
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
    RegisterForm : {
        marginVertical: 10,
        marginHorizontal: 20,
        width: '80%',
    },
    textInput: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        backgroundColor: '#ddd',
        borderRadius: 100/15,
        marginVertical: 7,
    },
    btnRegister: {
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
    linkLogin : {
        marginHorizontal: 20,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})
