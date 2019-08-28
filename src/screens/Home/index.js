import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../components/Page/Header'
import PromoImage from '../../components/Page/PromoImage'
import PopularCity from '../../components/Page/PopularCity'

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            menuTab : 'Cowok',
            activeCowok : { color : '#cf0e04'},
            activeCewek : { color : '#000'},
        }
        global.API_URL = 'https://anakost-api.herokuapp.com/api/v2/';
        global.API_IMAGE = 'https://anakost-api.herokuapp.com/public/images/';
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        this.props.navigation.navigate(userToken ? 'Iklan' : 'Blocked');
    };

    _handleMenuTab = (props) => {
        this.setState({
            menuTab : props,
        })
        if (props == 'Cewek'){
            this.setState({
                activeCewek : {color : '#cf0e04'},
                activeCowok : { color : '#000'},
            })
        } else {
            this.setState({    
                activeCowok : {color : '#cf0e04'},
                activeCewek : { color : '#000'},
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Header Component */}
                <Header
                    title="AnaKost"
                    icon='angellist'
                />
                {/* Type Menu */}
                <View style={styles.navMenu}>
                    <TouchableHighlight style={styles.menuItem} onPress={() => this._handleMenuTab('Cowok')}>
                        <Text style={this.state.activeCowok}>
                            <Icon name='male' size={18} style={this.state.activeCowok} /> &nbsp;
                            Kos-Kosan Cowok
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItem} onPress={() => this._handleMenuTab('Cewek')}>
                        <Text style={this.state.activeCewek}>
                            <Icon name='female' size={18} style={this.state.activeCewek} /> &nbsp;
                            Kos-Kosan Cewek
                        </Text>
                    </TouchableHighlight>
                </View>

                {/* Main Content */}
                <View style={styles.main}>
                    {/* Using ScrollView Vertical */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* SearchBar Component */}
                        <View style={styles.searchBar}>
                            <Text style={styles.searchBarTitle}>Hai,</Text>
                            <Text style={styles.searchBarTitle}>Butuh Kost Untuk {this.state.menuTab}?</Text>
                            <View style={styles.cardTextInput}>
                                <TextInput onFocus={() => this.props.navigation.navigate('List')} placeholder="Masukan alamat atau nama tempat" style={styles.searchBarTextInput} />
                                <Icon name='search' style={styles.searchBarIcon} color='#cf0e04' size={20} />
                            </View>
                        </View>

                        {/* Promo Component */}
                        <View style={styles.Promo}>
                            {/* Title */}
                            <Text style={styles.PromoTitle}>Promo</Text>
                            {/* Banner Promo */}
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
                                <PromoImage img={require('../../assets/images/banner-satu.jpg')} />
                                <PromoImage img={require('../../assets/images/banner-dua.png')} />
                                <PromoImage img={require('../../assets/images/banner-tiga.jpg')} />
                                <PromoImage img={require('../../assets/images/banner-empat.jpg')} />
                            </ScrollView>
                        </View>
                        {/* Pasang Iklan */}
                        <View style={styles.Ad}>
                            <Text style={styles.AdTitle}>Tertarik Mengiklankan kosmu ?</Text>
                            <TouchableHighlight onPress={() => this._bootstrapAsync()} style={styles.AdButton}>
                                <Text style={styles.AdTextButton}>Pasang Iklan</Text>
                            </TouchableHighlight>
                        </View>
                        {/* Component Kota Popular */}
                        <View style={styles.PopularCity}>
                            {/* Title */}
                            <Text style={styles.PopularCityTitle}>Kota Populer</Text>
                            {/* Kota Popular */}
                            <View style={styles.PopularCityContent}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                    <PopularCity kotaImg={require('../../assets/images/kota-jakarta.jpg')} href={() => this.props.navigation.navigate('List')} title="Jakarta" />
                                    <PopularCity kotaImg={require('../../assets/images/kota-bandung.jpg')}  href={() => this.props.navigation.navigate('List')} title="Bandung" />
                                    <PopularCity kotaImg={require('../../assets/images/kota-surabaya.jpg')}  href={() => this.props.navigation.navigate('List')} title="Surabaya" />
                                    <PopularCity kotaImg={require('../../assets/images/kota-majalengka.jpg')}  href={() => this.props.navigation.navigate('List')} title="Majalengka" />
                                    <PopularCity kotaImg={require('../../assets/images/kota-denpasar.png')}  href={() => this.props.navigation.navigate('List')} title="Denpasar" />
                                    <PopularCity kotaImg={require('../../assets/images/kota-yogyakarta.jpg')}  href={() => this.props.navigation.navigate('List')} title="Yogyakarta" />
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e6e4',
    },
    navMenu: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 4,
        justifyContent: 'space-between'
    },
    menuItem: {
        backgroundColor: '#fff',
        marginRight: 6,
        alignItems:'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
    },
    main: {
        flex: 1,
    },
    searchBar: {
        position:'relative',
        backgroundColor:'white',
        height: 150,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchBarTitle : {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    cardTextInput: {
        position : 'relative',
    },
    searchBarTextInput: {
        borderColor: '#cf0e04', 
        borderRadius: 6, 
        borderWidth:1, 
        marginTop: 10, 
        paddingLeft: 50, 
        paddingVertical: 8,
        backgroundColor: '#e3e6e4'
    },
    searchBarIcon : {
        position: 'absolute', 
        left: 10, 
        top: '40%'
    },
    Promo : {
        height: 200, 
        paddingHorizontal: 15, 
        backgroundColor: 'white', 
        marginTop: 10
    },
    PromoTitle : {
        fontSize: 16, 
        fontWeight: 'bold',
        paddingVertical: 15
    },
    Ad : {
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    AdTitle : {
        fontWeight: 'bold', 
        marginLeft: 5, 
        fontSize: 14
    },
    AdButton : {
        backgroundColor: '#cf0e04', 
        paddingHorizontal: 8, 
        paddingVertical: 3, 
        borderRadius: 4
    },
    AdTextButton : {
        color: '#fff', 
        fontWeight: 'bold'
    },
    PopularCity : {
        backgroundColor: '#fff', 
        paddingVertical: 8
    },
    PopularCityTitle : {
        fontSize: 20, 
        color: '#595958',
        marginHorizontal: 16
    },
    PopularCityContent : {
        marginHorizontal: 16, 
        marginVertical: 12, 
        flexDirection: 'row'
    }
})

