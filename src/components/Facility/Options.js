import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Options extends Component {
    render() {
        return (
            <View style={styles.facilityOptionsItem}>
                <Icon 
                    name={this.props.icon}
                    size={35}
                    color={this.props.iconColor}
                />
                <Text style={[styles.facilityOptionsText, {color : this.props.textColor}]}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    facilityOptionsItem : {
        alignItems: 'center',
        marginHorizontal: 6,
    },
    facilityOptionsText : {
        marginTop: 4
    }
});