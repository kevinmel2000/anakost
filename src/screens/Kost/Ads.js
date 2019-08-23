
import React from 'react';
import { View, ScrollView, TouchableHighlight, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CustomTextInput from '../../components/Form/CustomTextInput';
import MapView, { Marker } from 'react-native-maps';
import CustomSelect from '../../components/Form/CustomSelect';
import Axios from 'axios';
import CustomLocation from '../../components/Form/CustomLocation';
import AsyncStorage from '@react-native-community/async-storage';

export default class Ads extends React.Component {

    constructor() {
        super()
        this.state = {
            name: null,
            price: null,
            typeValue: null,
            is_order: 1,
            dataProvince: [],
            dataCity: [],
            dataKec: [],
            province: null,
            city: null,
            kec: null,
            valueAdress : {
                province: "",
                city: "",
                kec: ""
            },
            region: {
                latitude: -6.301281,
                longitude: 106.735149,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        }
    }

    componentDidMount () {
        // Fetch Data Province From API
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').then((res) => {
            // Save to Variable
            let province = res.data.semuaprovinsi.map(data => {return {label : data.nama, value : data.id }} )
            // Save to State from variable
            this.setState({dataProvince : province})

        })
    }

    // Handle Value Province
    _changeValueProvinsi = async(province) => {
        // Save to State
        await this.setState({ province })
        // If Province Selected, Run Function Fetch City
        if(province != null ) {
            this._getCityData(province)
        }
    }

    // Handle Value City
    _changeValueCity = async(city) => {
        // Save to State
        await this.setState({city})
        // If City Selected, Run Function Fetch Kec
        if( city != null) {
            this._getKecData(city)
        }
    }

    // Handle Value City
    _changeValueKec = async(kec) => {
        // Save to State
        await this.setState({kec})
        // If Kec Selected, Switch Value with Name
        if(kec) {

            let valueAdress = {
                province: "",
                city: "",
                kec: ""
            }

            // Filter & Get Name of Province
            valueAdress.province = this.state.dataProvince.filter(
                province =>
                province.value === this.state.province
            )[0].label;

            // Filter & Get Name of City
            valueAdress.city = this.state.dataCity.filter(
                city =>
                city.value === this.state.city
            )[0].label;

            // Filter & Get Name of Kec
            valueAdress.kec = this.state.dataKec.filter(
                kec =>
                kec.value === this.state.kec
            )[0].label;

            // Save or Set to State
            this.setState({
                valueAdress
            })
        }
    }

    _getCityData = (province) => {
        
        // Fetching Data City From API
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/'+ province +'/kabupaten').then((res) => {
            // Save to Variable
            let city = res.data.kabupatens.map(data => {return {label : data.nama, value : data.id }} )
            // Save to State from variable
            this.setState({dataCity : city})

        })
    }

    _getKecData = ( city ) => {

        // Fetching Data Kec From API
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/'+ city +'/kecamatan').then((res) => {
            // Save to Variable
            let kec = res.data.kecamatans.map(data => {return {label : data.nama, value: data.id}})
            // Save to State from variable
            this.setState({dataKec : kec})
        })
    }

    // Handle Save or Add Button
    _saveDataKost = async() => {
        const dataItem = {
            name : this.state.name,
            type : this.state.typeValue,
            description : null,
            price : parseInt(this.state.price),
            is_order : this.state.is_order,
            province : this.state.valueAdress.province,
            city : this.state.valueAdress.city,
            kec : this.state.valueAdress.kec,
            latitude : this.state.region.latitude,
            longitude : this.state.region.longitude,
            room_length: null,
            room_width: null,
            image: 'https://cdn2.tstatic.net/makassar/foto/bank/images/dekat-unm-parangtambung-d.jpg',
            created_by : 1
        }

        const token = await AsyncStorage.getItem("userToken");

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        Axios.post('http://192.168.137.1:8000/api/v2/kost', {
            name : this.state.name,
            type : this.state.typeValue,
            description : null,
            price : parseInt(this.state.price),
            province : this.state.valueAdress.province,
            city : this.state.valueAdress.city,
            kec : this.state.valueAdress.kec,
            latitude : this.state.region.latitude,
            longitude : this.state.region.longitude,
            room_length: null,
            room_width: null,
            image: 'https://cdn2.tstatic.net/makassar/foto/bank/images/dekat-unm-parangtambung-d.jpg',
            created_by : 1
        }, config)
        .then(res => {
            alert('Berhasil Tambah Iklan')
            this.props.navigation.navigate('Home')
        })
        .catch(function (error) {
            console.log(error);
        });

        // const res = await Axios.post("http://192.168.137.1:8000/api/v2/kost", 
        // {
        //     name : this.state.name,
        //     type : this.state.typeValue,
        //     description : null,
        //     price : parseInt(this.state.price),
        //     province : this.state.valueAdress.province,
        //     city : this.state.valueAdress.city,
        //     kec : this.state.valueAdress.kec,
        //     latitude : this.state.region.latitude,
        //     longitude : this.state.region.longitude,
        //     room_length: null,
        //     room_width: null,
        //     image: 'https://cdn2.tstatic.net/makassar/foto/bank/images/dekat-unm-parangtambung-d.jpg',
        //     created_by : 1
        // }, config)

        // if(res) {
        //     alert('Success')
        //     goBack()
        // }
    }

    onRegionChange = region => {
        this.setState({ region });
    }

    render() {

        const type = [
            { label: 'Laki-Laki', value: 'Laki-Laki' },
            { label: 'Perempuan', value: 'Perempuan' },
        ]

        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                    <TouchableHighlight style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-alt-circle-left' color='#ddd' size={25} />
                    </TouchableHighlight>
                    <Text style={styles.textHeader}>
                        Tambah Data Iklan
                    </Text>
                </View>

                {/* adsform */}
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollFormAds}>
                    <View style={styles.IklanForm}>
                        <CustomTextInput
                            handleChangeText={(name) => this.setState({name})}
                            title="Nama Kost *" placeholder="Masukan Nama Kost di sini" />
                        {/* <Text>{this.state.name}</Text> */}
                        <CustomSelect
                            title="Jenis Kost *"
                            items={type}
                            label="Pilih Jenis Kost"
                            handleChangeValue={(typeValue) => this.setState({typeValue})}
                        />
                        {/* <Text>{this.state.typeValue}</Text> */}
                        <CustomTextInput
                            changeKeyboard="numeric"
                            handleChangeText={(price) => this.setState({ price })}
                            title="Harga Kost Perbulan *" placeholder="Masukan Harga Kost di sini" />
                        {/* <Text>{this.state.price}</Text> */}
                        <CustomSelect
                            title="Provinsi *"
                            items={this.state.dataProvince}
                            label="Pilih Provinsi"
                            handleChangeValue={this._changeValueProvinsi}
                        />
                        
                        <CustomSelect
                            title="Kota *"
                            items={this.state.dataCity}
                            label="Pilih Kota"
                            handleChangeValue={this._changeValueCity}
                        />
                        
                        <CustomSelect
                            title="Kecamatan *"
                            items={this.state.dataKec}
                            label="Pilih Kecamatan"
                            handleChangeValue={this._changeValueKec}
                        /> 
                        <View style={{ position: 'relative' }}>
                            <Text style={styles.textformAdsMap}>
                                Search alamat/area kost anda di Peta, Kemudian pindahkan pin di peta ke lokasi tepat kost anda
                            </Text>
                            <TextInput placeholder="Cari Alamat Kost" style={styles.TextInputSearch} />

                            <Icon name='search' size={20} style={styles.iconSearch} />

                            <View style={styles.mapView}>
                                <MapView style={{ flex: 1 }}
                                    initialRegion={this.state.region}
                                    onRegionChangeComplete={this.onRegionChange}
                                >
                                    <Marker
                                        coordinate={this.state.region}
                                    />
                                </MapView>
                            </View>
                            
                        </View>
                        <View style={styles.mapNumber}>
                            <CustomLocation 
                                title="Latitude"
                                value={this.state.region.latitude.toString()}
                            />
                            <CustomLocation 
                                title="Longitude"
                                value={this.state.region.longitude.toString()}
                            />
                        </View>
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={styles.uploadKostImg}>Gambar Kost *</Text>
                            <TouchableHighlight style={styles.btnGambar}>
                                <Text style={styles.textGambar}>Pilih Gambar</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight onPress={this._saveDataKost} style={styles.btnTambah}>
                            <Text style={styles.textButton}>Tambah Kost</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#cf0e04',
        paddingBottom: 6
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    },
    btnBack: {
        position: 'absolute',
        left: 5,
        top: '6%',
        padding: 8,
        // backgroundColor: '#ddd',
    },
    IklanForm: {
        marginHorizontal: 15,
        marginBottom: 10,
    },
    TextInputSearch: {
        paddingVertical: 6,
        borderRadius: 6,
        borderColor: '#ddd',
        borderWidth: .5,
        paddingLeft: 50,
        paddingRight: 8
    },
    iconSearch: {
        position: 'absolute',
        top: '21%',
        left: 10
    },
    btnTambah: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#cf0e04',
        borderRadius: 100 / 15,
        borderWidth: 1.5,
        borderColor: '#ddd'
    },
    textButton: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    btnGambar: {
        borderRadius: 8,
        marginVertical: 4,
        padding: 8,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    textGambar: {
        color: '#000',
        fontWeight: 'bold'
    },
    scrollFormAds: {
        paddingVertical: 6
    },
    textformAdsMap: {
        marginVertical: 8,
        fontWeight: 'bold'
    },
    mapView: {
        height: 200,
        marginTop: 6
    },
    uploadKostImg: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6
    },
    mapNumber : {
        flexDirection:'row', 
        justifyContent: 'space-between'
    }
})