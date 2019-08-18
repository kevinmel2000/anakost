import React from 'react';
import {View, TextInput, Text} from 'react-native';

export default class CreateAdForm extends React.Component {
    render() {
        return (
            <View style={{paddingVertical: 8}}>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginBottom: 6}}>{this.props.title}</Text>
                <TextInput placeholder={this.props.placeholder} style={{borderColor: '#a3a3a3', borderWidth: 2, borderRadius: 100/15, paddingHorizontal: '5%'}} />
            </View>
        )
    }
}


