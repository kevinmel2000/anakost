import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export default class CreateAdForm extends React.Component {
    render() {

        const data = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>{this.props.title}</Text>
                <TextInput placeholder={this.props.placeholder} style={styles.TextInput} onChangeText={data.handleChangeText} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        paddingVertical: 8
    },
    textTitle : {
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 6
    },
    TextInput : {
        borderColor: '#a3a3a3', 
        borderWidth: 2, 
        borderRadius: 100/15, 
        paddingHorizontal: '5%'
    }
})

