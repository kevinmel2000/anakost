import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class BookScreen extends Component {
    render() {
        return (
            <View>
                <Text>Chat Rooms</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Move To Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

