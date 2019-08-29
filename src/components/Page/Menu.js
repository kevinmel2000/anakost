import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Menu extends React.Component {
    render() {
        return (
            <View style={styles.CardMenu}>
                <TouchableHighlight onPress={this.props.actionOne} style={styles.MenuButton}>
                    <View style={styles.MenuItem}>
                        <Icon name={this.props.iconOne} size={25} color="#fff" />
                        <Text style={styles.textMenu}>{this.props.textOne}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.actionSecond} style={styles.MenuButton}>
                    <View style={styles.MenuItem}>
                        <Icon name={this.props.iconSecond} size={25} color="#fff" />
                        <Text style={styles.textMenu}>{this.props.textSecond}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CardMenu : {
        marginVertical: 10,
        justifyContent: 'space-evenly',
        flexDirection: "row",
    },
    MenuButton : {
        backgroundColor: '#cf0e04',
        paddingHorizontal: 10,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
        width: '35%'
    },
    MenuItem : {
        flexDirection:'column', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textMenu : {
        fontSize: 14,
        color: "#fff",
        marginTop: 6,
    }
})