import React from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView, StyleSheet, Share} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';

export default class DetailScreen extends React.Component { 

    constructor() {
        super()
        this.state = {
            menu : (
                <Image source={require('../../assets/image/kost-satu.jpg')} style={styles.Image} />
            ),
            region:{
                latitude: -6.301281,
                longitude: 106.735149,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            colorFoto : '#fc8b19',
            colorPeta : '#02ba17',
        }
    }

    /*
     * Fungsi Share
     * Menggunakan async
     */
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Kost AnaRooms Nyaman Tidur Mimpi Indah',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

    _handleTabMenuPeta = () => {
        this.setState({menu : (
            <MapView style={{flex: 1}} initialRegion={this.state.region} onRegionChange={this.onRegionChange}/>
        ),
        colorPeta : '#fc8b19', colorFoto : '#02ba17'})
    }

    _handleTabMenuFoto = () => {
        this.setState({menu : (
            <Image source={require('../../assets/image/kost-satu.jpg')} style={styles.Image} />
        ),
        colorFoto : '#fc8b19', colorPeta : '#02ba17'})
    }

    render() {

        // const TabMenu = this.state.menu

        // if(TabMenu == 2) {
        //     const DataHeader = <MapView style={{flex: 1}} initialRegion={this.state.region} onRegionChange={this.onRegionChange}/>
        // } else {
        //     const DataHeader = <Image source={require('../../assets/image/kost-satu.jpg')} style={styles.Image} />
        // }

        const colorFoto = this.state.colorFoto
        const colorPeta = this.state.colorPeta

        return (
            // Container
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Image */}
                    <View style={styles.headerImage}>
                        {this.state.menu}
                        {/* Back & Share Button */}
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 10,
                            paddingHorizontal: 10,
                            justifyContent: 'space-between',
                        }}>
                            <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-left' size={20} color='#fff' />
                            </TouchableHighlight>

                            <TouchableHighlight onPress={this.onShare}>
                                <Icon name='share-square' size={20} color='#fff' />
                            </TouchableHighlight>
                        </View>
                    </View>

                    {/* Menu Options */}
                    <View style={styles.Menu}>
                        <TouchableHighlight onPress={this._handleTabMenuFoto} style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <View style={{
                                padding: 5, 
                                flexDirection: 'row', 
                                marginRight: 5
                            }}>
                                <View style={{backgroundColor: '#ddd', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: {colorFoto}, borderWidth: .4}}>
                                    <Icon name='image' size={15} color={colorFoto} />
                                </View>
                                <Text style={{color: colorFoto, fontSize: 14, fontWeight: '600', marginHorizontal: 12, paddingVertical: 6}}>Foto</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this._handleTabMenuPeta} style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <View style={{padding: 5, flexDirection: 'row', marginRight: 5}}>
                                <View style={{backgroundColor: '#ddd', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: {colorPeta}, borderWidth: .4}}>
                                    <Icon name='map-marker-alt' size={15} color={colorPeta} />
                                </View>
                                <Text style={{color:colorPeta, fontSize: 14, fontWeight: '400', marginHorizontal: 12, paddingVertical: 6}}>Peta</Text>
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
                        marginHorizontal: 17,
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
                        <View style={{flexDirection: 'row',height: 150, marginVertical: 10}}>
                            <View style={{flex: 1,width: '45%',marginRight:6, borderWidth: 0.6, borderColor: '#039116'}}>
                                <Text style={{textAlign: 'center', paddingVertical: 8}}>Tersedia 1 Kamar</Text>
                                <Image source={require('../../assets/image/kost-satu.jpg')} style={{
                                    flex: 1, width: undefined, height: undefined, resizeMode: 'cover'
                                }} />
                            </View>
                            <View style={{flex: 1,width: '45%',marginLeft:6, borderWidth: 0.6, borderColor: '#039116'}}>
                                <Text style={{textAlign: 'center', paddingVertical: 8}}>Tersedia 3 Kamar</Text>
                                <Image source={require('../../assets/image/kost-satu.jpg')} style={{
                                    flex: 1, width: undefined, height: undefined, resizeMode: 'cover'
                                }} />
                            </View>
                        </View>
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
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Book')} style={{
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

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        flex: 1
    },
    headerImage : {
        backgroundColor: '#38383b',
        height: 200
    },
    Image : {
        flex: 1, 
        width: undefined, 
        height: undefined, 
        resizeMode: 'cover'
    },
    Menu : {
        backgroundColor: '#1d1f1d',
        height: 60,
        flexDirection: 'row',
    }
})