import React from 'react';
import {View, Image} from 'react-native';

export default class PromoImage extends React.Component {
    render() {
        return (
            <View style={{ width: 270, height: 140, marginHorizontal: 6, borderRadius: 4,borderColor: '#b8b6b6', borderWidth: 1}}>
                <Image source={this.props.img} style={{flex:1, width: undefined, height: undefined, resizeMode:'contain', borderColor: '#b8b6b6', borderWidth: 2,}} />
            </View>
        )
    }
}
