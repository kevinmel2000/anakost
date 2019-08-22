import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
 
class CustomLocation extends React.Component{

    render() {

        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <TextInput
                    editable={false}
                    value={this.props.value}
                    style={styles.TextInput}
                />
            </View>
        )

    }
}

export default CustomLocation;

const styles = StyleSheet.create({
    title : {
        marginVertical: 8, 
        fontSize: 16, 
        fontWeight: 'bold'
    },
    TextInput : { 
        borderWidth: 1, 
        borderColor: '#cf0e04', 
        borderRadius: 8, 
        marginVertical: 6, 
        color: '#000', 
        paddingHorizontal: 6 
    }
})