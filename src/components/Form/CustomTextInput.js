import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export default class CustomTextInput extends React.Component {
    render() {

        const data = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    {data.title}
                </Text>
                <TextInput 
                    placeholder={data.placeholder} 
                    style={styles.TextInput} 
                    keyboardType={data.changeKeyboard ? data.changeKeyboard : 'default'}
                    onChangeText={data.handleChangeText}
                    multiline={data.multiline ? data.multiline : false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginHorizontal: 4,
    },
    textTitle : {
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 6
    },
    TextInput : {
        fontSize: 14,
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

