import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export default class CustomTextInput extends React.Component {
    render() {

        const data = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    {this.props.title}
                </Text>
                <TextInput 
                    placeholder={this.props.placeholder} 
                    style={styles.TextInput} 
                    keyboardType={data.changeKeyboard ? data.changeKeyboard : 'default'}
                    onChangeText={data.handleChangeText}
                />
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
        marginVertical: 8,
        borderColor: '#a3a3a3', 
        borderWidth: 1, 
        borderRadius: 100/25, 
        paddingHorizontal: '5%'
    }
})

