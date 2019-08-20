
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Register extends Component {

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
                    <TextInput placeholder="Full Name" style={styles.textInput} />

                    <TextInput placeholder="Email Address" style={styles.textInput} />

                    <TextInput placeholder="Username" style={styles.textInput} />

                    <TextInput placeholder="No Telpon" style={styles.textInput} />

                    <TextInput placeholder="Password" secureTextEntry style={styles.textInput} />

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={styles.btnRegister}>
                        <Text style={styles.textButton}>Register</Text>
                    </TouchableHighlight>
                </View>

                {/* Link Login */}
                <View style={styles.linkLogin}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{color: '#00910a'}}>Login Account</Text>
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
