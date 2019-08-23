import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends React.Component {

    constructor(){
        super()
        this.state = {
            userAccount : {
                name : "",
                email : "",
                phone : ""
            }
        }
        this._boostrapAsync();
    }

    // componentDidMount() {
    //     AsyncStorage.getItem('userToken', (error, result) => {
    //         if (!result) {
    //             this.props.navigation.navigate('Account')
    //         }
    //     });
    // }

    componentDidMount() {
        AsyncStorage.getItem('userAccount', (error, result) => {
            const userAccount = JSON.parse(result)

            this.setState({
                userAccount
            })
        })
        
    }

    _boostrapAsync = async () => {
        await AsyncStorage.getItem('userToken', (error, result) => {
            if (!result) {
                this.props.navigation.navigate('Account')
            }
        });
    }

    _handleLogout = async() => {

        await AsyncStorage.clear()
        alert('Logout Success')
        this.props.navigation.navigate('PublicStack')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* Icon & Full Name */}
                <View style={styles.AccountHeader}>
                        <TouchableHighlight style={styles.AccountHeaderIcon}>
                        <Icon name='grin-beam' size={40} color='#fff' />
                    </TouchableHighlight>
                    <Text style={styles.AccountHeaderText}>Risman Abdilah</Text>
                </View>
                
                {/* User Menu */}
                <View style={{flex: 1,paddingHorizontal: 20}}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('List')} style={styles.MenuSearchKost}>
                        <Text style={styles.textMenu}>Search Kost</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.MenuChangePassword}>
                        <Text style={styles.textMenu}>Change Password</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this._handleLogout} style={styles.MenuLogout}>
                        <Text style={styles.textMenu}>Logout</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AccountHeader : {
        backgroundColor: '#212020',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    AccountHeaderIcon : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
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

    MenuSearchKost : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
    },
    MenuChangePassword : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
    },
    MenuLogout : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#640dba',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
    },
    textMenu : {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 18
    }
})