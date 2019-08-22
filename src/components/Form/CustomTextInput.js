import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export default class CustomTextInput extends React.Component {
    render() {

        const data = this.props

        return (
            <View>
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
    textTitle : {
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 6
    },
    TextInput : {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#cf0e04',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginVertical: 8,
    }
})

