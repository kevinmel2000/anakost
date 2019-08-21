import React from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView, StyleSheet, Share} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Detail extends React.Component { 

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
            name : null,
            type : null,
            price : null,
            city : null,
            updatedAt : null,
            colorFoto : 'red',
            colorPeta : 'white',
        }
    }

    componentDidMount = async() => {

        const kostId = this.props.navigation.getParam('kostId');

        await axios.get('http://192.168.137.1:8000/api/v2/kost/' + kostId).then((res) => {
            const data = res.data[0]
            this.setState({
                menu : (
                    <Image source={{uri: data.image}} style={styles.Image} />
                ),
                type: data.type,
                city: data.city,
                name : data.name,
                price : data.price,
                updatedAt: data.updatedAt,
                region : {
                    latitude : data.latitude,
                    longitude: data.longitude,
                }
            })
            
        })
    }

    /*
     * Fungsi Share
     * Menggunakan async
     */
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              this.state.name,
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
        colorPeta : 'red', colorFoto : 'white'})
    }

    _handleTabMenuFoto = () => {
        this.setState({menu : (
            <Image source={require('../../assets/image/kost-satu.jpg')} style={styles.Image} />
        ),
        colorFoto : 'red', colorPeta : 'white'})
    }

    // Fetch the token from storage then navigate to our appropriate place
    _handleBooking = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        this.props.navigation.navigate(userToken ? 'Booking' : 'Account');
    };

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
                        <View style={styles.btnHeader}>
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
                        <TouchableHighlight onPress={this._handleTabMenuFoto} style={styles.pressFoto}>
                            <View style={styles.positionFoto}>
                                <View style={{backgroundColor: '#666666', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: {colorFoto}, borderWidth: .4}}>
                                    <Icon name='image' size={15} color={colorFoto} />
                                </View>
                                <Text style={{color: colorFoto, fontSize: 14, fontWeight: '600', marginHorizontal: 12, paddingVertical: 6}}>Foto</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this._handleTabMenuPeta} style={styles.pressFoto}>
                            <View style={{padding: 5, flexDirection: 'row', marginRight: 5}}>
                                <View style={{backgroundColor: '#666666', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: {colorPeta}, borderWidth: .4}}>
                                    <Icon name='map-marker-alt' size={15} color={colorPeta} />
                                </View>
                                <Text style={{color:colorPeta, fontSize: 14, fontWeight: '400', marginHorizontal: 12, paddingVertical: 6}}>Peta</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    
                    {/* Category & Stock */}
                    <View style={styles.categoryWrap}>
                        <Text style={styles.textCategory}>
                            {this.state.type}
                        </Text>

                        <Text style={styles.textStock}>
                            {this.state.city}
                        </Text>
                    </View>

                    {/* Title & Date Updated */}
                    <View style={styles.titleWrap}>
                        {/* Title */}
                        <Text style={styles.titleText}>
                            {this.state.name}
                        </Text>

                        {/* Date Updated */}
                        <Text style={{
                            paddingVertical: 6
                        }}>
                            Pembaharuan {this.state.updatedAt} Pukul 14.00
                        </Text>
                    </View>

                    {/* Notes */}
                    <View style={styles.notesWrap}>
                        <Text style={{ marginRight: 12} }>
                            <Icon name='circle' color='#000' /> Tidak termasuk listrik
                        </Text>

                        <Text style={{ marginRight: 12} }>
                            <Icon name='circle' color='#000' /> Tidak ada min. bayar
                        </Text>
                    </View>

                    {/* Luas & Fasilitas */}
                    <View style={styles.LuasWraps}>
                        {/* Luas */}
                        <View>
                            <Text style={styles.textLuas}>
                                Luas Kamar
                            </Text>

                            <View style={styles.textRoom}>
                                <Icon name='expand-arrows-alt' size={30} />
                                <Text style={{ marginHorizontal: 8}}>5x3 meter</Text>
                            </View>
                        </View>
                        
                        {/* Fasilitas */}
                        <View style={styles.facilityWrap}>
                            <Text style={{color: '#1c1c1c', fontWeight: 'bold'}}>
                                Fasilitas kost dan kamar
                            </Text>
                            <TouchableHighlight>
                                <Text style={{color: '#cf0e04'}}>Lihat Semua</Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                    {/* Rating */}
                    <View style={styles.ratingWrap}>
                        {/* Left */}
                        <View style={styles.leftWrap}>
                            {/* Kebersihan */}
                            <Text>
                                Kebersihan
                            </Text>
                            <View style={styles.ratingIcon}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Keamanan */}
                            <Text>
                                Keamanan
                            </Text>
                            <View style={styles.ratingIcon}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Fasilitas Kamar */}
                            <Text>
                                Fasilitas Kamar
                            </Text>
                            <View style={styles.ratingIcon}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>
                        </View>

                        {/* Right */}
                        <View style={styles.rightWrap}>
                            {/* Kenyamanan */}
                            <Text>
                                Kenyamanan
                            </Text>
                            <View style={styles.ratingIcon}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Harga */}
                            <Text>
                                Harga
                            </Text>
                            <View style={styles.ratingIcon}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>

                            {/* Fasilitas Umum */}
                            <Text>
                                Fasilitas Umum
                            </Text>
                            <View style={styles.ratingIcon}>
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                                <Icon name='star' />
                            </View>
                        </View>
                    </View>

                    {/* Verifikasi */}
                    <View style={styles.verifikasiWrap}>
                        <Text style={styles.verifikasiText}>Verifikasi</Text>

                        {/* Verifikasi 1 */}
                        <View style={styles.verifikasi1Wrap}>
                            
                            <View style={styles.verifikasiIconA}>
                                <Icon name='hourglass' size={8} color='#fff' />
                            </View>
                            <Text>Kost belum dikunjungi</Text>
                        </View>
                        {/* Verifikasi 2 */}
                        <View style={styles.verifikasi1Wrap}>
                            
                            <View style={styles.verifikasiIconB}>
                                <Icon name='check' size={8} color='#fff' />
                            </View>
                            <Text style={{color: 'red'}}>Telepon sudah terverifikasi</Text>
                        </View>
                    </View>

                    {/* Card Report */}
                    <View style={styles.cardReport}>
                        <Text style={styles.cardReportText}>
                            Ada data yang kurang tepat atau kendala lain dengan kost ?
                        </Text>

                        {/* Button Report */}
                        <TouchableHighlight style={styles.btnReport}>
                            <Text style={{color: 'red',}}>Laporkan</Text>
                        </TouchableHighlight>
                    </View>

                    {/* recommended kost list */}
                    <View style={styles.recomendedListWarpOut}>
                        <Text style={styles.recomendedListTextOut}>Kost Menarik Lainnya</Text>
                        <View style={styles.recomendedListWarpIn}>
                            <View style={styles.recomandedListWrapIn1}>
                                <Text style={styles.recommendedListTextIn1}>Tersedia 1 Kamar</Text>
                                <Image source={require('../../assets/image/kost-satu.jpg')} style={styles.recommendedListImg} />
                            </View>
                            <View style={styles.recomandedListWrapIn1}>
                                <Text style={styles.recommendedListTextIn1}>Tersedia 3 Kamar</Text>
                                <Image source={require('../../assets/image/kost-satu.jpg')} style={styles.recommendedListImg} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            
                {/* Bottom Card */}
                <View style={styles.btnCard}>

                    {/* Price by month */}
                    <View style={styles.priceWrap}>
                        <Text style={styles.priceText}>
                            Rp. {this.state.price}/bulan
                        </Text>
                        <TouchableHighlight>
                            <Text style={{color: 'red'}}>Lihat semua harga <Icon name='arrow-alt-circle-down' size={10} /></Text>
                        </TouchableHighlight>
                    </View>

                    {/* Button Call & Booking */}
                    <View style={styles.btnBookingWrap}>
                        {/* Call Button */}
                        <TouchableHighlight style={styles.btnCall}>
                            <Text style={styles.btnCallText}>
                                Hubungi Kost
                            </Text>
                        </TouchableHighlight>

                        {/* Booking Button */}
                        <TouchableHighlight onPress={() => this._handleBooking()} style={styles.btnBooking}>
                            <Text style={styles.btnBookingText}>
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
        backgroundColor: '#4d4d4d',
        height: 60,
        flexDirection: 'row',
    },
    btnHeader: {
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    pressFoto: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionFoto: {
        padding: 5, 
        flexDirection: 'row', 
        marginRight: 5
    },
    categoryWrap: {
        flexDirection: 'row',
        paddingHorizontal: 17,
        paddingTop: 6
    },
    textCategory: {
        fontSize: 16,
        color: 'red',
        fontWeight: '300',
        marginRight: 18,
    },
    textStock: {
        fontSize: 16,
        color: 'red',
        fontWeight: '600',
        marginRight: 18,
    },
    titleWrap: {
        marginHorizontal: 17,
        paddingVertical: 6,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 0.7
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        width: '75%'
    },
    notesWrap: {
        marginHorizontal: 17,
        paddingVertical: 14,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 0.7,
        flexDirection: 'row'
    },
    LuasWraps: {
        marginHorizontal: 17,
        paddingVertical: 10,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 0.7,
    },
    textLuas: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 14,
    },
    textRoom: {
        marginVertical: 10, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    facilityWrap: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 4
    },
    ratingWrap: {
        flexDirection: 'row',
        paddingHorizontal: 12
    },
    leftWrap: {
        marginVertical: 8,
        marginHorizontal: 6,
        flex: 1,
    },
    ratingIcon: {
        flexDirection: 'row',
        marginVertical: 6
    },
    rightWrap: {
        marginVertical: 8,
        marginHorizontal: 6,
        flex: 1,
    },
    verifikasiWrap: {
        paddingVertical: 8,
        paddingHorizontal: 17
    },
    verifikasiText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000'
    },
    verifikasi1Wrap: {
        marginVertical: 6,
        flexDirection: 'row'
    },
    verifikasiIconA: {
        backgroundColor: '#ddd',
        borderRadius: 8,
        padding: 5,
        width: 18,
        alignItems: 'center', 
        marginRight: 4
    },
    verifikasiIconB: {
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 5,
        width: 18,
        alignItems: 'center', 
        marginRight: 4
    },
    cardReport: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 17,
        backgroundColor: '#ddd',
        borderRadius: 8,
        justifyContent:'space-between',
        height: 50,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    cardReportText: {
        width: '65%',
        color: '#121212',
    },
    btnReport: {
        borderRadius: 6,
        borderColor: 'red',
        borderWidth: .5,
        padding: 6,
    },
    recomendedListWarpOut: {
        marginHorizontal: 17,
        paddingVertical: 10,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 0.7,
    },
    recomendedListTextOut: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    recomendedListWarpIn: {
        flexDirection: 'row',
        height: 150,
        marginVertical: 10
    },
    recomandedListWrapIn1: {
        flex: 1,
        width: '45%',
        marginRight:6, 
        borderWidth: 0.6, 
        borderColor: 'red', 
        backgroundColor: 'red'
    },
    recommendedListTextIn1: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 8
    },
    recommendedListImg: {
        flex: 1, 
        width: undefined, 
        height: undefined, 
        resizeMode: 'cover'
    },
    btnCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 60,
        marginHorizontal: 8,
        marginVertical: 8,
        borderColor: '#bdbdbd',
        borderWidth: .4,
        flexDirection: 'row',
    },
    priceWrap: {
        width: '50%',
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    priceText: {fontSize: 16, 
        fontWeight: '500', 
        color: '#2b2b2b'
    },
    btnBookingWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 8,
        width: '50%',
    },
    btnCall: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderRadius: 8,
        borderWidth: 1,
        width: '45%',
        marginHorizontal: 4,
        marginVertical: 8,
        padding: 10,
        justifyContent: 'center',
    },
    btnCallText: { 
        color: 'red', 
        fontSize: 10, 
        textAlign:'center'
    },
    btnBooking: {
        backgroundColor: 'red',
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 1,
        width: '45%',
        marginHorizontal: 4,
        marginVertical: 8,
        padding: 10,
        justifyContent: 'center',
    },
    btnBookingText: { 
        color: '#fff', 
        fontSize: 10, 
        textAlign: 'center'
    },
    

})