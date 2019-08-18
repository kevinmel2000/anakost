import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class BookListScreen extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    backgroundColor: '#cf0e04',
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: '400'
                    }}>Booking List</Text>

                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={{
                        position: 'absolute',
                        left: 12,
                        top: 15
                    }}>
                        <Icon name='arrow-alt-circle-left' color='#ddd' size={30} />
                    </TouchableHighlight>
                </View>

                <View style={{
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    flexDirection: 'row',
                    borderColor: '#c0c2c0',
                    borderWidth: 0.5,
                    borderRadius: 8,
                    margin:8,
                }}>
                    <View style={{ width: '35%', height: 160,marginRight: 8}}>
                        <Image source={require('../../assets/dummy/book-kost-satu.jpg')} style={{width: undefined, height: undefined, flex: 1, resizeMode: 'cover', borderRadius: 100/15, borderColor: '#ddd', marginRight: 8}} />
                    </View>
                    
                    <View style={{flexDirection: 'column', width: '65%',}}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#000',
                        }}>Kost AnaRooms Level Premium</Text>

                        <View style={{flexDirection: 'row'}}>
                            <View style={{paddingRight: 8, marginTop: 4}}>
                                <Text>Booking</Text>
                                <Text>12 Agu 2019</Text>
                            </View>
                            <View style={{paddingRight: 8, marginTop: 4}}>
                                <Text>Durasi Sewa</Text>
                                <Text>1 Bulan</Text>
                            </View>
                        </View>

                        <View style={{position: 'absolute', bottom: 0}}>
                            <TouchableHighlight style={{
                                borderColor: '#cf0e04',
                                padding: 6,
                                borderRadius: 6,
                                borderWidth: .4,
                                width: 140,
                                alignItems: 'center',
                            }}>
                                <Text style={{color: '#cf0e04'}}>Tunggu Konfirmasi</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

