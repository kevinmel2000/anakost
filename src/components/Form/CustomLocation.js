import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
 
class CustomLocation extends React.Component{

    render() {

        return (
            <View style={styles.container}>
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
    container : {
        flex: 1,
        marginHorizontal: 4,
    },
    title : {
        fontSize: 16, 
        fontWeight: 'bold',
        marginVertical: 6
    },
    TextInput : { 
        fontSize: 14,
        paddingHorizontal: 4,
        paddingLeft: 10,
        borderWidth: 0.5,
        borderColor: '#cf0e04',
        borderRadius: 8,
        color: 'black',
        marginVertical: 8,
    }
})