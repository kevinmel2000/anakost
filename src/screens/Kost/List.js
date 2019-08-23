
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';
import axios from 'axios'


// const Kost = [
//     {
//         id : 1,
//         name : 'Kost Surga Kaum Pria',
//         address : 'Jalan Selamat dunia akhirat lewat sholat',
//         stock : 'Tersedia 1 Kamar',
//         longitude: 120,
//         latitude: 120,
//         cover : 'https://cdn2.tstatic.net/makassar/foto/bank/images/dekat-unm-parangtambung-d.jpg'
//     },
//     {
//         id : 2,
//         name : 'Kost Murah Anak Sekolah',
//         address : 'Ingat Akhirat Dunia Sesaat',
//         stock : 'Tersedia 19 Kamar',
//         longitude: 120,
//         latitude: 120,
//         cover : 'http://blog.unnes.ac.id/sfatimah77/wp-content/uploads/sites/275/2015/11/Tips-Mencari-Tempat-Kos-di-Jogja.jpg'
//     },
//     {
//         id : 3,
//         name : 'Kost Mahal Pejabat Korup',
//         address : 'Jalan Sesat akhirat melarat tanpa sholat',
//         stock : 'Tersedia 8 Kamar',
//         longitude: 120,
//         latitude: 120,
//         cover : 'http://blog.unnes.ac.id/sfatimah77/wp-content/uploads/sites/275/2015/11/Tips-Mencari-Tempat-Kos-di-Jogja.jpg'
//     }
// ]

export default class List extends Component {

    constructor() {
        super()

        this.state = {
            tabs : 2,
            bgTabs1 : '#c22121',
            bgTabs2 : '#fff',
            colorTabs1 : '#000',
            colorTabs2 : '#fff',
            kota : 'Masukan Nama Kota',
            DataKost : null,
            region:{
                latitude: -6.301281,
                longitude: 106.735149,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: {
                latlng: {
                latitude: -6.301281,
                longitude: 106.735149,
                },
                title: "Bootcamp Dumbways",
                description: "Batch 11 Best Quality"
            }
        }
    }

    componentDidMount() {

        axios.get('http://192.168.137.1:8000/api/v2/kost').then((res) => {
            this.setState({
                DataKost : res.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handleButton = (props) => {
        if(props===1) {
            this.setState({
                tabs: props,
                bgTabs1 : '#fff',
                bgTabs2: '#c22121',
                colorTabs1 : '#fff',
                colorTabs2 : '#000',
            })
        } else {
            this.setState({
                tabs: props,
                bgTabs1: '#c22121',
                bgTabs2 : '#fff',
                colorTabs1 : '#000',
                colorTabs2 : '#fff',
            })
        }
    }

    onRegionChange = region => {
        this.setState({ region });
    }

    render() {

        const Tabs = this.state.tabs;

        if(Tabs === 1) {
            return (
                <View style={{flex: 1}}>
                    {/* Search Bar */}
                    <View style={styles.searchBar}>
                        <TextInput autoFocus style={styles.searchBarInput} />
                        <Icon name='arrow-left' style={styles.searchBarIcon} color='#cf0e04' size={20} onPress={() => this.props.navigation.navigate('Home') } />
                    </View>

                    {/* Tab Menu */}
                    <View style={styles.tabMenu}>
                        <TouchableHighlight onPress={() => this.handleButton(1)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs2
                        }}>
                            <Text style={{color : this.state.colorTabs1, fontSize: 14, fontWeight: 'bold'}}>Lihat Peta</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleButton(2)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs1
                        }}>
                            <Text style={{color : this.state.colorTabs2, fontSize: 14, fontWeight: 'bold'}}>Lihat Daftar</Text>
                        </TouchableHighlight>
                    </View>

                    <MapView style={{flex: 1}}
                        initialRegion={this.state.region}
                        onRegionChange={this.onRegionChange}
                    />
                </View>
            )
        } else {
            return (
                <View style={{flex: 1,}}>

                    {/* Search Bar */}
                    <View style={styles.searchBar}>
                        <TextInput autoFocus style={styles.searchBarInput} />
                        <Icon name='arrow-left' style={styles.searchBarIcon} color='#cf0e04' size={20} onPress={() => this.props.navigation.navigate('Home') } />
                    </View>
                    {/* Tab Menu */}
                    <View style={styles.tabMenu}>
                        <TouchableHighlight onPress={() => this.handleButton(1)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs2
                        }}>
                            <Text style={{color : this.state.colorTabs1, fontSize: 14, fontWeight: 'bold'}}>Lihat Peta</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleButton(2)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs1
                        }}>
                            <Text style={{color : this.state.colorTabs2, fontSize: 14, fontWeight: 'bold'}}>Lihat Daftar</Text>
                        </TouchableHighlight>
                    </View>

                    {/* tab list kos */}
                    <View style={styles.container}> 
                    
                        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: '30%' }}>

                            <FlatList
                                keyExtractor= {(item) => item.id.toString()}
                                data = {this.state.DataKost}
                                renderItem = {({item}) => {
                                    return (
                                        <TouchableOpacity key={item.id} style={styles.card} onPress={() => this.props.navigation.navigate('Detail', {kostId : item.id})} >
                                            <Image style={styles.cardImage} source={{uri:item.image}}/>
                                            <Text style={styles.cardTextPay}>{item.name}</Text>
                                            <Text style={styles.cardTextAddress}>{item.province}, {item.city}</Text>
                                            <Text style={styles.cardTextNote}>{item.type}</Text>
                                            <Text style={styles.cardTextOwner}>Pemilik Kost : {item.createdBy.fullName}</Text>
                                            <Text style={styles.cardTextBook}>Bisa Booking</Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </ScrollView>

                    {/* Sort & Filter Kost */}
                    </View>
                        <View style={styles.sortWrap}>
                            <TouchableOpacity onPress={() =>alert('under maintenance')} style={styles.btnFilter}>
                                <Text style={{color:'white'}}>Filter</Text>
                            </TouchableOpacity>
                            <Text style={styles.dashFilter}> | </Text>
                            <TouchableOpacity onPress={() =>alert('under maintenance')} style={styles.btnSort}>
                                <Text style={{color:'white'}}>Sort</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    searchBar : {
        position:'relative',
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    searchBarInput : {
        borderColor: '#cf0e04', 
        borderRadius: 6, 
        borderWidth:1, 
        marginVertical: 5, 
        paddingLeft: 50, 
        paddingVertical: 8,
        backgroundColor: '#e3e6e4'
    },
    searchBarIcon : {
        position: 'absolute', 
        left: 30, 
        top: 22
    },
    tabMenu : {
        height: 40,
        flexDirection: 'row',
    },
    container: {
        paddingTop:15,
        paddingBottom: 25,
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    card: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 20,
        paddingBottom: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    cardImage : {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5                
    },
    cardTextPay : {
        padding:5 ,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#060404'
    },
    cardTextAddress: {
        fontSize: 14,
        paddingHorizontal: 5
    },
    cardTextNote: {
        fontSize: 10,
        paddingHorizontal: 5,
        color: '#9936e2'
    },
    cardTextBook: {
        backgroundColor: 'red',
        borderRadius: 150/25,
        width: 105,
        color: '#FFFFFF',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    cardTextOwner: {
        marginVertical: 8,
        fontSize: 10,
        color: '#000',
        fontWeight: '500'
    },
    sortWrap: {
        position: "absolute",
        bottom: '6%',
        left: '35%',
        flexDirection: 'row'
    },
    btnFilter: {
        backgroundColor:'red',
        padding: 8
    },
    dashFilter: {
        backgroundColor: 'red',
        padding: 8,color:'white'
    },
    btnSort: {
        backgroundColor:'red',
        padding: 8
    }
})
