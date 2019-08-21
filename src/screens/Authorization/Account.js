
import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class Account extends React.Component {

    componentDidMount() {
        AsyncStorage.getItem('userToken', (error, result) => {
            if (result) {
                this.props.navigation.navigate('Profile')
            }
        });
    }

    render() {

        // GET Parameters from Login
        // If you have logged in, you do not have to re-login
        // Enter Parameters to the status variable
        // const status = this.props.navigation.getParam('status', 0);

        return (
            <View style={styles.container}>

            <TouchableHighlight style={styles.bgIcon}>
                <Icon name='sad-cry' size={60} color='#ededed' />
            </TouchableHighlight>

                <Text style={styles.TextTitle}>
                    Sorry, You must Login or Register New Account.
                </Text>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')} style={styles.btnRegister}>
                    <Text style={styles.textBtn}>Register User Account</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Login Account</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

// Custom Styles
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
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
        marginBottom: 12,
    },
    TextTitle : {
        fontSize: 18,
        fontWeight: '500',
        color: '#00d',
        textAlign: 'center',
        marginBottom: 15,
    },
    btnRegister : {
        padding: 6,
        backgroundColor: '#cf0e04',
        borderRadius: 100/15,
        marginBottom: 15
    },
    btnLogin : {
        padding: 6,
        backgroundColor: '#cf0e04',
        borderRadius: 100/15,
    },
    textBtn : {
        color: '#fff', 
        fontWeight: 'bold', 
        textTransform: 'uppercase'
    },

})

