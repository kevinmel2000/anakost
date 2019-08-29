import React from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView, StyleSheet, Share, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux'
import Options from '../../components/Facility/Options';
import Global_URI from '../../environment/Global_URI';

class Detail extends React.Component {

    constructor() {
        super()
        this.state = {
            menu: (
                <Image source={{ uri: Global_URI.image + 'default.jpeg' }} style={styles.Image} />
            ),
            region: {
                latitude: -6.301281,
                longitude: 106.735149,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            name: null,
            type: null,
            description : null,
            price: null,
            city: null,
            room_length: null,
            room_width: null,
            image: null,
            phone : null,
            updatedAt: null,
            colorFoto: 'red',
            colorPeta: 'white',
        }
    }

    componentDidMount = () => {

        const data = this.props.navigation.getParam('data')

        this.setState({
            name: data.name,
            type: data.type,
            description : data.description,
            price: data.price,
            city: data.city,
            room_length: data.room_length,
            room_width: data.room_width,
            image: data.image,
            phone : data.phone,
            updatedAt: data.updatedAt,
            menu: (
                <Image source={{ uri: Global_URI.image + data.image }} style={styles.Image} />
            ),
            region: {
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
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
        this.setState({
            menu: (
                <MapView style={{ flex: 1 }}
                    initialRegion={this.state.region}
                    onRegionChangeComplete={this.onRegionChange}
                >
                    <Marker
                        coordinate={this.state.region}
                    />
                </MapView>
            ),
            colorPeta: 'red', colorFoto: 'white'
        })
    }

    onRegionChange = region => {
        this.setState({ region });
    }

    _handleTabMenuFoto = () => {
        this.setState({
            menu: (
                <Image source={{ uri: Global_URI.image + this.state.image }} style={styles.Image} />
            ),
            colorFoto: 'red', colorPeta: 'white'
        })
    }

    // Fetch the token from storage then navigate to our appropriate place
    _handleBooking = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        this.props.navigation.navigate(userToken ? 'Booking' : 'Blocked');
    };

    render() {

        var updatedAt = new Date(this.state.updatedAt);

        var date = updatedAt.getDate();
        var month = updatedAt.getMonth(); //Be careful! January is 0 not 1
        var year = updatedAt.getFullYear();
        var hour = updatedAt.getHours();
        var minutes = updatedAt.getMinutes(); 

        var newUpdatedDate = date + "-" +(month + 1) + "-" + year;

        var newTime = hour + ":" + minutes;

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
                                <View style={{ backgroundColor: '#666666', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150 / 4, borderColor: { colorFoto }, borderWidth: .4 }}>
                                    <Icon name='image' size={15} color={colorFoto} />
                                </View>
                                <Text style={{ color: colorFoto, fontSize: 14, fontWeight: '600', marginHorizontal: 12, paddingVertical: 6 }}>Foto</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this._handleTabMenuPeta} style={styles.pressFoto}>
                            <View style={{ padding: 5, flexDirection: 'row', marginRight: 5 }}>
                                <View style={{ backgroundColor: '#666666', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150 / 4, borderColor: { colorPeta }, borderWidth: .4 }}>
                                    <Icon name='map-marker-alt' size={15} color={colorPeta} />
                                </View>
                                <Text style={{ color: colorPeta, fontSize: 14, fontWeight: '400', marginHorizontal: 12, paddingVertical: 6 }}>Peta</Text>
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
                            Terakhir diperbarui {newUpdatedDate} Pukul {newTime}
                        </Text>
                    </View>

                    {/* Detail Options */}
                    <View style={styles.detailOptions}>

                        {/* Description */}
                        <View style={{paddingVertical: 8}}>
                            <Text style={{ color: '#1c1c1c', fontWeight: 'bold' }}>
                                Deskripsi Kost
                            </Text>
                            <Text style={{ marginVertical: 6}}>
                                {this.state.description}
                            </Text>
                        </View>

                        {/* Luas */}
                        <View>
                            <Text style={styles.textLuas}>
                                Luas Kamar
                            </Text>

                            <View style={styles.textRoom}>
                                <Icon name='expand-arrows-alt' size={30} />
                                <Text style={{ marginHorizontal: 8 }}> {this.state.room_length} x {this.state.room_width} meter</Text>
                            </View>
                        </View>

                        {/* Fasilitas */}
                        <View style={styles.facilityWrap}>
                            <Text style={{ color: '#1c1c1c', fontWeight: 'bold' }}>
                                Fasilitas kost dan kamar
                            </Text>
                            
                            <View style={styles.facilityOptions}>
                                <Options 
                                    icon="wifi"
                                    iconColor="gray"
                                    text="Internet"
                                    textColor="gray"
                                />
                                <Options 
                                    icon="toilet"
                                    iconColor="red"
                                    text="Kamar Mandi"
                                    textColor="red"
                                />
                                <Options 
                                    icon="bed"
                                    iconColor="red"
                                    text="Kamar Tidur"
                                    textColor="red"
                                />
                            </View>
                        </View>

                    </View>


                    {/* Card Report */}
                    <View style={styles.cardReport}>
                        <Text style={styles.cardReportText}>
                            Ada data yang kurang tepat atau kendala lain dengan kost ?
                        </Text>

                        {/* Button Report */}
                        <TouchableHighlight style={styles.btnReport}>
                            <Text style={{ color: 'red', }}>Laporkan</Text>
                        </TouchableHighlight>
                    </View>

                    {/* recommended kost list */}
                    <View style={styles.recomendedListWarpOut}>
                        <Text style={styles.recomendedListTextOut}>Kost Menarik Lainnya</Text>
                        <View style={styles.recomendedListWarpIn}>
                            <View style={styles.recomandedListWrapIn1}>
                                <Text style={styles.recommendedListTextIn1}>Tersedia 1 Kamar</Text>
                                <Image source={require('../../assets/images/kost-satu.jpg')} style={styles.recommendedListImg} />
                            </View>
                            <View style={styles.recomandedListWrapIn1}>
                                <Text style={styles.recommendedListTextIn1}>Tersedia 3 Kamar</Text>
                                <Image source={require('../../assets/images/kost-satu.jpg')} style={styles.recommendedListImg} />
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
                            <Text style={{ color: 'red' }}>Lihat semua harga <Icon name='arrow-alt-circle-down' size={10} /></Text>
                        </TouchableHighlight>
                    </View>

                    {/* Button Call & Booking */}
                    <View style={styles.btnBookingWrap}>
                        {/* Call Button */}
                        <TouchableHighlight onPress={() => Linking.openURL(`tel:${this.state.phone}`)} style={styles.btnCall}>
                            <Text style={styles.btnCallText}>
                                Hubungi Kost
                            </Text>
                        </TouchableHighlight>

                        {/* Booking Button */}
                        <TouchableHighlight onPress={() => this._handleBooking()} style={styles.btnBooking}>
                            <Text style={styles.btnBookingText}>
                                Pesan
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DetailDorm: state.DetailDorm,
    }
}

export default connect(mapStateToProps)(Detail)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    headerImage: {
        backgroundColor: '#38383b',
        height: 200
    },
    Image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    Menu: {
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
    detailOptions: {
        marginBottom: 20,
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
        marginVertical: 8
    },
    facilityOptions : {
        flexDirection: 'row',
        marginVertical: 6,
    },   
    cardReport: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 17,
        backgroundColor: '#ddd',
        borderRadius: 8,
        justifyContent: 'space-between',
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
        marginRight: 6,
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
    priceText: {
        fontSize: 16,
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
        textAlign: 'center'
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