import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

export default class CheckUser extends React.Component {
    
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'PrivateStack' : 'PublicStack');
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Anakost App</Text>
                <ActivityIndicator />
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
    title : {
        marginVertical: 15,
        textAlign: 'center',
    }
});