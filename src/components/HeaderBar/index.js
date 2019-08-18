import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class HeaderBar extends React.Component {
    render() {
        return (
            <View style={styles.textHeader}>
                <Text style={styles.textHeaderStyle}>AnaKost</Text>
                <TouchableHighlight style={styles.iconHeaderChat}>
                    <Icon name='angellist' size={30} color='#fff' />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textHeader: {
        position: 'relative',
        backgroundColor: '#cf0e04',
        paddingTop: 8,
        paddingBottom: 10,
    },
    textHeaderStyle: {
        fontSize: 24,
        color: '#ededed',
        marginLeft: 15,
        fontWeight: 'bold',
    },
    iconHeaderChat: {
        position: 'absolute',
        right: 10,
        top: 5,
        padding: 5,
    }
})