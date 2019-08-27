import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class Blocked extends React.Component {

    componentDidMount() {
        AsyncStorage.getItem('userToken', (error, result) => {
            if (result) {
                this.props.navigation.navigate('Profile')
            }
        });
    }

    render() {

        return (
            <View style={styles.container}>

            <TouchableHighlight style={styles.bgIcon}>
                <Icon name='angry' size={60} color='#ededed' />
            </TouchableHighlight>

                <Text style={styles.TextTitle}>
                    Maaf! Akses Terbatas. Silahkan Masuk atau Daftar
                </Text>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')} style={styles.btnRegister}>
                    <Text style={styles.textBtn}>Daftar Akun</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Masuk</Text>
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

