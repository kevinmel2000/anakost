import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage'

export default class CheckUser extends React.Component {
    
    async componentDidMount () {
        // Check User Token
        const userToken = await AsyncStorage.getItem('userToken');
        // Navigate Options
        this.props.navigation.navigate(userToken ? 'PrivateStack' : 'PublicStack');
    };
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.bgIcon}>
                    <Icon name='hotel' size={60} color='#ededed' />
                </TouchableHighlight>
                <Text style={styles.title}>Anakost</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
    title : {
        fontSize: 28,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 15,
        textAlign: 'center',
    }
});