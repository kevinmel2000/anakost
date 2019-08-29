
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';
import { connect } from 'react-redux'

import { allDorm } from '../../_actions/ListDorm'
import Loading from '../../components/Page/Loading';
import Global_URI from '../../environment/Global_URI';

class List extends Component {

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
                description: "Mantapu Djiwa"
            }
        }
    }

    componentDidMount() {
        this.handleLoad()
    }

    handleLoad = () => {
        this.props.dispatch(allDorm())
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

                            {
                                this.props.data.isLoading && <Loading />
                            }

                            <FlatList
                                keyExtractor= {(item) => item.id.toString()}
                                data = {this.props.data.dorms}
                                renderItem = {({item}) => {
                                    return (
                                        <TouchableOpacity key={item.id} style={styles.card} onPress={
                                            () => this.props.navigation.navigate('Detail', {
                                                data : {
                                                    id : item.id,
                                                    name : item.name,
                                                    type : item.type,
                                                    description : item.description,
                                                    price : item.price,
                                                    province : item.province,
                                                    city : item.city,
                                                    kec : item.kec,
                                                    latitude : item.latitude,
                                                    longitude : item.longitude,
                                                    room_length : item.room_length,
                                                    room_width : item.room_width,
                                                    image : item.image,
                                                    updatedAt : item.updatedAt,
                                                    email : item.createdBy.email,
                                                    fullName : item.createdBy.fullName,
                                                    phone : item.createdBy.phone
                                                }
                                            })
                                        } >
                                            <Image style={styles.cardImage} source={{uri: Global_URI.image + item.image}}/>
                                            <Text style={styles.cardTextPay}>{item.name}</Text>
                                            <Text style={styles.cardTextAddress}>{item.province}, {item.city}</Text>
                                            <Text style={styles.cardTextNote}>{item.type}</Text>
                                            <Text style={styles.cardTextOwner}>Pemilik Kost : {item.createdBy.fullName}</Text>
                                            <Text style={styles.cardTextBook}>Bisa Pesan</Text>
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
                                <Text style={{color:'white'}}>Urutkan</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.ListDorm,
    }
}

export default connect(mapStateToProps)(List);

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
        borderColor: '#ddd',
        borderWidth: .5,
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
        borderWidth: 0.5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,  
    },
    cardTextPay : {
        padding:5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#060404'
    },
    cardTextAddress: {
        marginLeft: 10,
        fontSize: 14,
        paddingHorizontal: 5
    },
    cardTextNote: {
        marginLeft: 10,
        fontSize: 10,
        paddingHorizontal: 5,
        color: '#9936e2'
    },
    cardTextOwner: {
        marginLeft: 15,
        marginVertical: 8,
        fontSize: 10,
        color: '#000',
        fontWeight: '500'
    },
    cardTextBook: {
        marginLeft: 10,
        backgroundColor: 'red',
        borderRadius: 150/25,
        width: 105,
        color: '#FFFFFF',
        padding: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
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
