import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Filter extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.filterText}>
                        Filter Page
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