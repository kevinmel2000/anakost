
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Login extends Component {
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
                    <TextInput placeholder="Username" style={styles.TextInput} />

                    <TextInput placeholder="Password" secureTextEntry style={styles.TextInput} />

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Account', { status : 1})} style={styles.btnLogin}>
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
