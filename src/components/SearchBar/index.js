import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class SearchBar extends Component {
    render() {
        return (
            <View style={styles.searchBar}>
                <TextInput autoFocus={this.props.focus} placeholder="Masukan alamat atau nama tempat" style={{borderColor: '#cf0e04', borderRadius: 6, borderWidth:1, marginVertical: 10, paddingLeft: 50, paddingVertical: 8,backgroundColor: '#e3e6e4'}} />
                <Icon name='arrow-left' style={{position: 'absolute', left: 30, top: 30}} color='#cf0e04' size={20} onPress={() => this.props.press} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        position:'relative',
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
})