import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderBar from '../../components/HeaderBar';
import PromoImage from '../../components/PromoImage';
import PopularCity from '../../components/PopularCity';
import AdScreen from '../AdScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailScreen from '../DetailScreen';

class HomeScreen extends Component {

    constructor(){
        super();
        this.state = {
            menuTab : 'Kos',
            activeKos : { color : '#cf0e04'},
            activeKontrakan : { color : '#000'},
            activePerumahan : { color : '#000'},
        }
    }

    _handleMenuTab = (props) => {
        this.setState({
            menuTab : props,
        })
        if(props == 'Perumahan') {
            this.setState({
                activePerumahan : {color : '#cf0e04'},
                activeKontrakan : { color : '#000'},
                activeKos : { color : '#000'},
            })
        } else if (props == 'Kontrakan'){
            this.setState({
                activeKontrakan : {color : '#cf0e04'},
                activeKos : { color : '#000'},
                activePerumahan : { color : '#000'},
            })
        } else {
            this.setState({    
                activeKos : {color : '#cf0e04'},
                activePerumahan : { color : '#000'},
                activeKontrakan : { color : '#000'},
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Header Component */}
                <HeaderBar />
                {/* Triple Menu */}
                <View style={styles.navMenu}>
                    <TouchableHighlight style={styles.menuItem} onPress={() => this._handleMenuTab('Kos')}>
                        <Text style={this.state.activeKos}>
                            <Icon name='warehouse' style={this.state.activeKos} /> &nbsp;
                            Kos-Kosan
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItem} onPress={() => this._handleMenuTab('Kontrakan')}>
                        <Text style={this.state.activeKontrakan}>
                            <Icon name='hotel' style={this.state.activeKontrakan} /> &nbsp;
                            Kontrakan
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.menuItem} onPress={() => this._handleMenuTab('Perumahan')}>
                        <Text style={this.state.activePerumahan}>
                            <Icon name='building' style={this.state.activePerumahan} /> &nbsp;
                            Perumahan
                        </Text>
                    </TouchableHighlight>
                </View>
                {/* Main Content */}
                <View style={styles.main}>
                    {/* Using ScrollView Vertical */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* SearchBar Component */}
                        <View style={styles.searchBar}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hai,</Text>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Lagi Butuh {this.state.menuTab}?</Text>
                            <TextInput onFocus={() => this.props.navigation.navigate('List')} placeholder="Masukan alamat atau nama tempat" style={{borderColor: '#cf0e04', borderRadius: 6, borderWidth:1, marginTop: 10, paddingLeft: 50, paddingVertical: 8,backgroundColor: '#e3e6e4'}} />
                            <Icon name='search' style={{position: 'absolute', left: 30, bottom: 38}} color='#cf0e04' size={20} />
                        </View>
                        {/* Promo Component */}
                        <View style={{height: 200, paddingHorizontal: 15, backgroundColor: 'white', marginTop: 10}}>
                            <View style={{paddingVertical: 10}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Promo</Text>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
                                <PromoImage img={require('../../assets/dummy/banner-satu.jpg')} />
                                <PromoImage img={require('../../assets/dummy/banner-dua.png')} />
                                <PromoImage img={require('../../assets/dummy/banner-tiga.jpg')} />
                                <PromoImage img={require('../../assets/dummy/banner-empat.jpg')} />
                            </ScrollView>
                        </View>
                        <View style={{backgroundColor:'white',padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 14}}>Tertarik Mengiklankan kosmu ?</Text>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Iklan', {status: 1})} style={{
                                backgroundColor: '#cf0e04', 
                                paddingHorizontal: 8, 
                                paddingVertical: 3, 
                                borderRadius: 4
                            }}>
                                <Text style={{color: '#fff', fontWeight: 'bold'}}>Pasang Iklan</Text>
                            </TouchableHighlight>
                        </View>
                        {/* Component Kota */}
                        <View style={{backgroundColor: '#fff', paddingVertical: 8}}>
                            <View style={{marginHorizontal: 16}}>
                                <Text style={{fontSize: 20, color: '#595958'}}>Kota Populer</Text>
                            </View>
                            <View style={{marginHorizontal: 16, marginVertical: 12, flexDirection: 'row'}}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                    <PopularCity kotaImg={require('../../assets/dummy/kota-jakarta.jpg')} href={() => this.props.navigation.navigate('List', {kota: 'Jakarta'})} title="Jakarta" />
                                    <PopularCity kotaImg={require('../../assets/dummy/kota-bandung.jpg')}  href={() => this.props.navigation.navigate('List', {kota: 'Bandung'})} title="Bandung" />
                                    <PopularCity kotaImg={require('../../assets/dummy/kota-surabaya.jpg')}  href={() => this.props.navigation.navigate('List', {kota: 'Surabaya'})} title="Surabaya" />
                                    <PopularCity kotaImg={require('../../assets/dummy/kota-majalengka.jpg')}  href={() => this.props.navigation.navigate('List', {kota: 'Majalengka'})} title="Majalengka" />
                                    <PopularCity kotaImg={require('../../assets/dummy/kota-denpasar.png')}  href={() => this.props.navigation.navigate('List', {kota: 'Denpasar'})} title="Denpasar" />
                                    <PopularCity kotaImg={require('../../assets/dummy/kota-yogyakarta.jpg')}  href={() => this.props.navigation.navigate('List', {kota: 'Yogyakarta'})} title="Yogyakarta" />
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Iklan : {
        screen: AdScreen
    },
    Detail: {
        screen: DetailScreen,
    },
},
{
    initialRouteName: 'Home',
    headerMode: 'none',
});

export default createAppContainer(AppNavigator);

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
    }
})