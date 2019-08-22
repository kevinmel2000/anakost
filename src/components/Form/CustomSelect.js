import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
 
class CustomSelect extends React.Component{

    render() {

        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <RNPickerSelect
                    onValueChange={this.props.handleChangeValue}
                    items={this.props.items}
                    placeholder={({ label : this.props.label})}
                    style={customSelectStyle}
                    useNativeAndroidPickerStyle={false}
                />
            </View>
        )

    }
}

export default CustomSelect;

const styles = StyleSheet.create({
    title : {
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 6
    }
})

const customSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#cf0e04',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        marginVertical: 8, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#cf0e04',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginVertical: 8, // to ensure the text is never behind the icon
      },
})