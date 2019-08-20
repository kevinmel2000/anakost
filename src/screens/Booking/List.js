import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image, StyleSheet} from 'react-native';

// Use Icon From Font Awesome 5
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class List extends Component {

    render() {
        return (
            // Container
            <View style={{flex: 1}}>
                {/* Header */}
                <View style={styles.Header}>
                    <Text style={styles.HeaderTitle}>Daftar Pemesanan</Text>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={styles.BackIcon}>
                        <Icon name='arrow-alt-circle-left' color='#ddd' size={30} />
                    </TouchableHighlight>
                </View>

                {/* Main */}
                <View style={styles.Main}>
                    {/* Image Left */}
                    <View style={styles.image}>
                        <Image source={require('../../assets/dummy/book-kost-satu.jpg')} style={styles.imageData} />
                    </View>
                    {/* Content */}
                    <View style={styles.content}>
                        <Text style={styles.Title}>Kost AnaRooms Level Premium</Text>

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
                        {/* Wait Confirm */}
                        <View style={{position: 'absolute', bottom: 0}}>
                            <TouchableHighlight style={styles.btnConfirm}>
                                <Text style={{color: '#cf0e04'}}>Tunggu Konfirmasi</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

// Custom Styles
const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    Header : {
        backgroundColor: '#cf0e04',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderTitle : {
        color: '#fff',
        fontSize: 24,
        fontWeight: '400'
    },
    BackIcon : {
        position: 'absolute',
        left: 12,
        top: 15
    },
    Main : {
        paddingHorizontal: 8,
        paddingVertical: 8,
        flexDirection: 'row',
        borderColor: '#c0c2c0',
        borderWidth: 0.5,
        borderRadius: 8,
        margin:8,
    },
    image : { 
        width: '35%', 
        height: 160,
        marginRight: 8
    },
    imageData : {
        flex: 1, 
        width: undefined, 
        height: undefined, 
        resizeMode: 'cover', 
        borderRadius: 100/15, 
        borderColor: '#ddd', 
        marginRight: 8
    },
    content : {
        flexDirection: 'column', 
        width: '65%'
    },
    Title : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    btnConfirm : {
        borderColor: '#cf0e04',
        padding: 6,
        borderRadius: 6,
        borderWidth: .4,
        width: 140,
        alignItems: 'center',
    }
})