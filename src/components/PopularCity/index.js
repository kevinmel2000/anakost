import React from 'react';
import {View, Image, TouchableHighlight, Text} from 'react-native';

export default class PopularCity extends React.Component {
    
    render() {

        return (
            <TouchableHighlight onPress={this.props.href} style={{marginRight: 8,borderColor: '#b8b6b6', borderWidth: 2.5, borderRadius: 5}}>
                <View style={{width: 100, height: 150, position:'relative'}}>
                        <Image source={this.props.kotaImg} style={{flex:1, width: undefined, height: undefined, resizeMode:'cover', borderRadius: 2.5}} />
                        <Text style={{position: 'absolute', bottom: 8, left: 8, color: '#fff', fontWeight: 'bold'}}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

