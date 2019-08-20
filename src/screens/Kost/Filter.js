import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Filter extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.filterText}>
                        Tipe Kost (Gender)
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterText: {
        fontWeight: 'bold',
        color:'black',
        fontSize: 20
    }
})