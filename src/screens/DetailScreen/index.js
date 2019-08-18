import React from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DetailScreen extends React.Component { 

    render() {
        return (
            // Container
            <View style={{
                backgroundColor: '#fff',
                flex: 1
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Image */}
                    <View style={{
                        backgroundColor: '#38383b',
                        height: 200
                    }}>
                        <Image source={require('../../assets/dummy/kost-satu.jpg')} style={{flex: 1, width: undefined, height: undefined, resizeMode: 'cover'}} />
                    </View>

                    {/* Menu Options */}
                    <View style={{
                        backgroundColor: '#1d1f1d',
                        height: 60,
                        flexDirection: 'row',
                    }}>
                        <TouchableHighlight style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <View style={{
                                padding: 5, 
                                flexDirection: 'row', 
                                marginRight: 5
                            }}>
                                <View style={{backgroundColor: '#ddd', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: '#fc8b19', borderWidth: .4}}>
                                    <Icon name='image' size={15} color='#fc8b19' />
                                </View>
                                <Text style={{color:'#fc8b19', fontSize: 14, fontWeight: '600', marginHorizontal: 12, paddingVertical: 6}}>Foto</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <View style={{padding: 5, flexDirection: 'row', marginRight: 5}}>
                                <View style={{backgroundColor: '#ddd', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: '#fff', borderWidth: .4}}>
                                    <Icon name='map-marker-alt' size={15} color='#000' />
                                </View>
                                <Text style={{color:'#fff', fontSize: 14, fontWeight: '400', marginHorizontal: 12, paddingVertical: 6}}>Peta</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    
                    {/* Category & Stock */}
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 17,
                        paddingTop: 6
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#fc8b19',
                            fontWeight: '300',
                            marginRight: 18,
                        }}>
                            Putri
                        </Text>

                        <Text style={{
                            fontSize: 16,
                            color: '#fc8b19',
                            fontWeight: '600',
                            marginRight: 18,
                        }}>
                            Tinggal 1 Kamar
                        </Text>
                    </View>

                    {/* Title & Date Updated */}
                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 6,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7
                    }}>
                        {/* Title */}
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#000',
                            width: '75%'
                        }}>
                            Kost AnaRooms Nyaman Tidur Mimpi Indah
                        </Text>

                        {/* Date Updated */}
                        <Text style={{
                            paddingVertical: 6
                        }}>
                            Update 12 August 2019 at 14.00
                        </Text>
                    </View>

                    {/* Notes */}
                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 14,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7,
                        flexDirection: 'row'
                    }}>
                        <Text style={{ marginRight: 12} }>
                            <Icon name='circle' color='#000' /> Tidak termasuk listrik
                        </Text>

                        <Text style={{ marginRight: 12} }>
                            <Icon name='circle' color='#000' /> Tidak ada min. bayar
                        </Text>
                    </View>

                    {/* Luas & Fasilitas */}
                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 10,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7,
                    }}>
                        {/* Luas */}
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#000',
                                fontSize: 14,
                            }}>
                                Luas Kamar
                            </Text>

                            <View style={{ marginVertical: 10, flexDirection: 'row',alignItems: 'center'}}>
                                <Icon name='expand-arrows-alt' size={30} />
                                <Text style={{ marginHorizontal: 8}}>5x3 meter</Text>
                            </View>
                        </View>
                        
                        {/* Fasilitas */}
                        <View style={{flexDirection: 'row',justifyContent:'space-between', marginVertical: 4}}>
                            <Text style={{color: '#1c1c1c', fontWeight: 'bold'}}>
                                Fasilitas kost dan kamar
                            </Text>
                            <TouchableHighlight>
                                <Text style={{color: '#cf0e04'}}>Lihat Semua</Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                    {/* Rating */}
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 12,
                    }}>
                        {/* Left */}
                        <View style={{
                            marginVertical: 8,
                            marginHorizontal: 6,
                            flex: 1,
                        }}>
                            {/* Kebersihan */}
                            <Text>
                                Kebersihan
                            </Text>
                            <View style={{flexDirection: 'row', marginVertical: 6}}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Keamanan */}
                            <Text>
                                Keamanan
                            </Text>
                            <View style={{flexDirection: 'row', marginVertical: 6}}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Fasilitas Kamar */}
                            <Text>
                                Fasilitas Kamar
                            </Text>
                            <View style={{flexDirection: 'row', marginVertical: 6}}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>
                        </View>

                        {/* Right */}
                        <View style={{
                            marginVertical: 8,
                            marginHorizontal: 6,
                            flex: 1,
                        }}>
                            {/* Kenyamanan */}
                            <Text>
                                Kenyamanan
                            </Text>
                            <View style={{flexDirection: 'row', marginVertical: 6}}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Harga */}
                            <Text>
                                Harga
                            </Text>
                            <View style={{flexDirection: 'row', marginVertical: 6}}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Fasilitas Umum */}
                            <Text>
                                Fasilitas Umum
                            </Text>
                            <View style={{flexDirection: 'row', marginVertical: 6}}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>
                        </View>
                    </View>

                    {/* Verifikasi */}
                    <View style={{paddingVertical: 8, paddingHorizontal: 17}}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '800',
                            color: '#000'
                        }}>Verifikasi</Text>

                        {/* Verifikasi 1 */}
                        <View style={{marginVertical: 6, flexDirection: 'row'}}>
                            
                            <View style={{
                                backgroundColor: '#ddd',
                                borderRadius: 8,
                                padding: 5,
                                width: 18,
                                alignItems: 'center', 
                                marginRight: 4
                            }}>
                                <Icon name='hourglass' size={8} color='#fff' />
                            </View>
                            <Text>Kost belum dikunjungi</Text>
                        </View>
                        {/* Verifikasi 2 */}
                        <View style={{marginVertical: 6, flexDirection: 'row'}}>
                            
                            <View style={{
                                backgroundColor: '#039116',
                                borderRadius: 8,
                                padding: 5,
                                width: 18,
                                alignItems: 'center', 
                                marginRight: 4
                            }}>
                                <Icon name='check' size={8} color='#fff' />
                            </View>
                            <Text style={{color: '#039116'}}>Telepon sudah terverifikasi</Text>
                        </View>
                    </View>

                    {/* Card Report */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 8,
                        backgroundColor: '#ddd',
                        borderRadius: 8,
                        justifyContent:'space-between',
                        height: 50,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                    }}>
                        <Text style={{
                            width: '65%',
                            color: '#121212',
                        }}>
                            Ada data yang kurang tepat atau kendala lain dengan kost ?
                        </Text>

                        {/* Button Report */}
                        <TouchableHighlight style={{
                            borderRadius: 6,
                            borderColor: '#039116',
                            borderWidth: .5,
                            padding: 6,
                        }}>
                            <Text style={{color: '#039116',}}>Laporkan</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 10,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7,
                    }}>
                        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Kost Menarik Lainnya</Text>
                    </View>
                </ScrollView>
            
                {/* Bottom Card */}
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 8,
                    height: 60,
                    marginHorizontal: 8,
                    marginVertical: 8,
                    borderColor: '#bdbdbd',
                    borderWidth: .4,
                    flexDirection: 'row',
                }}>

                    {/* Price by month */}
                    <View style={{
                        width: '50%',
                        justifyContent: 'center',
                        paddingHorizontal: 8
                    }}>
                        <Text style={{fontSize: 16, fontWeight: '500', color: '#2b2b2b'}}>
                            Rp. 1.750.000/bulan
                        </Text>
                        <TouchableHighlight>
                            <Text style={{color: '#fc8b19'}}>Lihat semua harga <Icon name='arrow-alt-circle-down' size={10} /></Text>
                        </TouchableHighlight>
                    </View>

                    {/* Button Call & Booking */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: 8,
                        width: '50%',
                    }}>
                        {/* Call Button */}
                        <TouchableHighlight style={{
                            backgroundColor: 'white',
                            borderColor: '#fc8b19',
                            borderRadius: 8,
                            borderWidth: 1,
                            width: '45%',
                            marginHorizontal: 4,
                            marginVertical: 8,
                            padding: 10,
                            justifyContent: 'center',
                        }}>
                            <Text style={{ color: '#fc8b19', fontSize: 10, textAlign:'center'}}>
                                Hubungi Kost
                            </Text>
                        </TouchableHighlight>

                        {/* Booking Buuton */}
                        <TouchableHighlight style={{
                            backgroundColor: '#fc8b19',
                            borderRadius: 8,
                            borderColor: '#fff',
                            borderWidth: 1,
                            width: '45%',
                            marginHorizontal: 4,
                            marginVertical: 8,
                            padding: 10,
                            justifyContent: 'center',
                        }}>
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center'}}>
                                Booking
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            
            </View>
        )
    }
}