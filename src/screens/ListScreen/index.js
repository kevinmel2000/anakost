import React, {Component} from 'react';
import {View, Image, ScrollView, Text, TouchableHighlight, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ListScreen extends Component {

    constructor() {
        super()

        this.state = {
            tabs : 2,
            bgTabs1 : '#c22121',
            bgTabs2 : '#fff',
            colorTabs1 : '#000',
            colorTabs2 : '#fff',
        }
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

    render() {

        const Tabs = this.state.tabs;
        const kota = this.props.navigation.getParam('kota');

        if(Tabs === 1) {
            return (
                <View>
                    {/* Search Bar */}
                    <View style={{
                        position:'relative',
                        backgroundColor:'white',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                    }}>
                        <TextInput value={kota} autoFocus placeholder="Masukan alamat atau nama tempat" style={{borderColor: '#cf0e04', borderRadius: 6, borderWidth:1, marginVertical: 10, paddingLeft: 50, paddingVertical: 8,backgroundColor: '#e3e6e4'}} />
                        <Icon name='arrow-left' style={{position: 'absolute', left: 30, top: 30}} color='#cf0e04' size={20} onPress={() => this.props.navigation.goBack() } />
                    </View>
                    {/* Tab Menu */}
                    <View style={{
                        height: 60,
                        flexDirection: 'row',
                    }}>
                        <TouchableHighlight onPress={() => this.handleButton(1)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs2
                        }}>
                            <Text style={{color : this.state.colorTabs1, fontSize: 18, fontWeight: 'bold'}}>Lihat Peta</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleButton(2)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs1
                        }}>
                            <Text style={{color : this.state.colorTabs2, fontSize: 18, fontWeight: 'bold'}}>Lihat Daftar</Text>
                        </TouchableHighlight>
                    </View>

                    <View>
                        <Text>Tab 1</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    {/* Search Bar */}
                    <View style={{
                        position:'relative',
                        backgroundColor:'white',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                    }}>
                        <TextInput value={kota} autoFocus={this.props.focus} placeholder="Masukan alamat atau nama tempat" style={{borderColor: '#cf0e04', borderRadius: 6, borderWidth:1, marginVertical: 10, paddingLeft: 50, paddingVertical: 8,backgroundColor: '#e3e6e4'}} />
                        <Icon name='arrow-left' style={{position: 'absolute', left: 30, top: 30}} color='#cf0e04' size={20} onPress={() => this.props.navigation.goBack() } />
                    </View>
                    {/* Tab Menu */}
                    <View style={{
                        height: 60,
                        flexDirection: 'row',
                    }}>
                        <TouchableHighlight onPress={() => this.handleButton(1)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs2
                        }}>
                            <Text style={{color : this.state.colorTabs1, fontSize: 18, fontWeight: 'bold'}}>Lihat Peta</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleButton(2)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs1
                        }}>
                            <Text style={{color : this.state.colorTabs2, fontSize: 18, fontWeight: 'bold'}}>Lihat Daftar</Text>
                        </TouchableHighlight>
                        
                    </View>
                    {/* tab list kos */}
                    <View style={styles.container}>
                    <ScrollView>
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{uri:'http://blog.unnes.ac.id/sfatimah77/wp-content/uploads/sites/275/2015/11/Tips-Mencari-Tempat-Kos-di-Jogja.jpg'}}/>
                    <Text style={styles.cardTextPay}>$900 / Month</Text>
                    <Text style={styles.cardTextAddress}> Kos Blok 10, Jl. Lingkar Ngembal Kulo Kudus</Text>
                        <Text style={styles.cardTextBook}>Bisa Booking</Text>
                    <Text style={styles.cardTextNote}> Semua Masih Kosong </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{uri:'http://blog.unnes.ac.id/sfatimah77/wp-content/uploads/sites/275/2015/11/Tips-Mencari-Tempat-Kos-di-Jogja.jpg'}}/>
                    <Text style={styles.cardTextPay}>$900 / Month</Text>
                    <Text style={styles.cardTextAddress}> Kos Blok 10, Jl. Lingkar Ngembal Kulo Kudus</Text>
                        <Text style={styles.cardTextBook}>Bisa Booking</Text>
                    <Text style={styles.cardTextNote}> Semua Masih Kosong </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{uri:'http://blog.unnes.ac.id/sfatimah77/wp-content/uploads/sites/275/2015/11/Tips-Mencari-Tempat-Kos-di-Jogja.jpg'}}/>
                    <Text style={styles.cardTextPay}>$900 / Month</Text>
                    <Text style={styles.cardTextAddress}> Kos Blok 10, Jl. Lingkar Ngembal Kulo Kudus</Text>
                        <Text style={styles.cardTextBook}>Bisa Booking</Text>
                    <Text style={styles.cardTextNote}> Semua Masih Kosong </Text>
                </TouchableOpacity>
                </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:15,
        backgroundColor: '#ffffff'
    },
     card: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
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
    },
    cardTextNote: {
        fontSize: 10,
        color: '#9936e2'
    },
    cardTextBook: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: 105,
    color: '#FFFFFF',
    paddingRight: 10,
    paddingLeft: 10
    }
    
})