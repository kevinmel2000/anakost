import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import Menu from '../../components/Page/Menu';

export default class Profile extends React.Component {

    constructor(){
        super()
        this.state = {
            name : null,
            email : null,
            phone : null
        }
    }

    async componentDidMount () {
        await AsyncStorage.getItem('userToken', (error, result) => {
            if (!result) {
                this.props.navigation.navigate('Blocked')
            }
        });

        await AsyncStorage.getItem('userAccount', (error, result) => {
            const userAccount = JSON.parse(result)

            this.setState({
                name : userAccount.fullName,
                email : userAccount.email,
                phone : userAccount.phone
            })

        })
    }

    _handleLogout = async() => {

        await AsyncStorage.clear()
        alert('Berhasil Logout')
        this.props.navigation.navigate('PublicStack')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* Icon & Full Name */}
                <View style={styles.AccountHeader}>
                    <TouchableHighlight style={styles.AccountHeaderIcon}>
                        <Icon name='grin-beam' size={40} color='#cf0e04' />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._handleLogout} style={styles.AccountLogout}>
                        <Icon name='sign-out-alt' size={30} color='#0d0d0d' />
                    </TouchableHighlight>
                    <Text style={styles.AccountHeaderText}>{this.state.name}</Text>
                </View>
                
                {/* User Menu */}
                <View style={styles.MainMenu}>

                    <Menu 
                        actionOne={() => this.props.navigation.navigate('Home')}
                        iconOne='home'
                        textOne="Beranda"
                        actionSecond={() => this.props.navigation.navigate('List')}
                        iconSecond='list-alt'
                        textSecond="Data Kost"
                    />

                    <Menu 
                        actionOne={() => this.props.navigation.navigate('BookingList')}
                        iconOne='clipboard-list'
                        textOne="Pesanan"
                        actionSecond={() => this.props.navigation.navigate('Advertisement')}
                        iconSecond='ad'
                        textSecond="Tambah Iklan"
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AccountHeader : {
        backgroundColor: '#cccccc',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    AccountHeaderIcon : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#cf0e04',
        borderWidth: 1.5,
        borderRadius: 8,
    },
    AccountHeaderText : {
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#fff',
        fontWeight: 'bold',
        textShadowColor: '#cf0e04',
        textShadowRadius: 3
    },
    AccountLogout : {
        position: 'absolute',
        borderRadius: 5,
        right: 10,
        top: '25%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        paddingVertical: 6
    },  
    MainMenu : {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
})