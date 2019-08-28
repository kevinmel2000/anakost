import React from 'react';
import { View, ScrollView, TouchableHighlight, Text, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CustomTextInput from '../../components/Form/CustomTextInput';
import MapView, { Marker } from 'react-native-maps';
import CustomSelect from '../../components/Form/CustomSelect';
import Axios from 'axios';
import CustomLocation from '../../components/Form/CustomLocation';
import AsyncStorage from '@react-native-community/async-storage';

import ImagePicker from 'react-native-image-picker';

export default class Advertisement extends React.Component {

    constructor() {
        super()
        this.state = {
            name: null,
            type: null,
            description: null,
            price: null,
            // Fetch All
            province: [],
            city: [],
            kec: [],
            // Fetch ID
            provinceID: null,
            cityID: null,
            kecID: null,
            // Input Value
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
            },
            room_length: null,
            room_width: null,
            image : null
        }
    }

    componentDidMount () {
        // Fetch Data Province From API
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').then((res) => {
            // Save to Variable
            let province = res.data.semuaprovinsi.map(data => {return {label : data.nama, value : data.id }} )
            // Save to State from variable
            this.setState({province})

        })
    }

    // Handle Value Province
    _changeValueProvinsi = async(provinceID) => {
        // Save to State
        await this.setState({ provinceID })
        // If Province Selected, Run Function Fetch City
        if(provinceID != null ) {
            this._getCityData(provinceID)
        }
    }

    // Handle Value City
    _changeValueCity = async(cityID) => {
        // Save to State
        await this.setState({cityID})
        // If City Selected, Run Function Fetch Kec
        if( cityID != null) {
            this._getKecData(cityID)
        }
    }

    // Handle Value City
    _changeValueKec = async(kecID) => {
        // Save to State
        await this.setState({kecID})
        // If Kec Selected, Switch Value with Name
        if(kecID) {

            let valueAdress = {
                province: "",
                city: "",
                kec: ""
            }

            // Filter & Get Name of Province
            valueAdress.province = this.state.province.filter(
                data => data.value === this.state.provinceID
            )[0].label;

            // Filter & Get Name of City
            valueAdress.city = this.state.city.filter(
                data => data.value === this.state.cityID
            )[0].label;

            // Filter & Get Name of Kec
            valueAdress.kec = this.state.kec.filter(
                data => data.value === this.state.kecID
            )[0].label;

            // Save or Set to State
            this.setState({
                valueAdress
            })
        }
    }

    _getCityData = (provinceID) => {
        
        // Fetching Data City From API
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/'+ provinceID +'/kabupaten').then((res) => {
            // Save to Variable
            let city = res.data.kabupatens.map(data => {return {label : data.nama, value : data.id }} )
            // Save to State from variable
            this.setState({city})

        })
    }

    _getKecData = ( cityID ) => {

        // Fetching Data Kec From API
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/'+ cityID +'/kecamatan').then((res) => {
            // Save to Variable
            let kec = res.data.kecamatans.map(data => {return {label : data.nama, value: data.id}})
            // Save to State from variable
            this.setState({ kec })
        })
    }

    onRegionChange = region => {
        this.setState({ region });
    }

    handleUploadImage = async () => {

        // alert('Upload Gambar OK')
        const options = {
            title: "Pilih Gambar",
            takePhotoButtonTitle: "Kamera",
            chooseFromLibraryButtonTitle: "Koleksi",
            cancelButtonTitle: "Batal",
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: './src/assets/images',
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            let image = {
                uri: response.uri,
                type: 'image/jpeg',
                name: response.fileName
            }

            this.setState({
                image
            })
        })

    }

    // Handle Save or Add Button
    _saveDataKost = async() => {
        
        const token = await AsyncStorage.getItem("userToken");

        const formData = new FormData()

        formData.append('name', this.state.name)
        formData.append('type', this.state.type)
        formData.append('description', this.state.description)
        formData.append('price', parseInt(this.state.price))
        formData.append('province', this.state.valueAdress.province)
        formData.append('city', this.state.valueAdress.city)
        formData.append('kec', this.state.valueAdress.kec)
        formData.append('latitude', this.state.region.latitude)
        formData.append('longitude', this.state.region.longitude)
        formData.append('room_length', parseInt(this.state.room_length))
        formData.append('room_width', parseInt(this.state.room_width))
        formData.append('image', this.state.image)
        
        console.log(formData)

        Axios.post({
            method : 'POST',
            url : API_URL + 'kost',
            headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            data : formData
        })
        .then(res => {
            alert('Berhasil Tambah Iklan')
            this.props.navigation.navigate('Home')
        })
        .catch(function (error) {
            alert('Gagal broh cek lagi!')
            console.log(error);
        });

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
                        
                        <CustomSelect
                            title="Jenis Kost *"
                            items={type}
                            label="Pilih Jenis Kost"
                            handleChangeValue={(type) => this.setState({type})}
                        />

                        <CustomTextInput
                            multiline={true}
                            handleChangeText={(description) => this.setState({description})}
                            title="Deskripsi *" placeholder="Masukan Deskripsi Kost di sini" />
                        
                        <CustomTextInput
                            changeKeyboard="numeric"
                            handleChangeText={(price) => this.setState({ price })}
                            title="Harga Kost Perbulan *" placeholder="Masukan Harga Kost di sini" />
                        
                        <CustomSelect
                            title="Provinsi *"
                            items={this.state.province}
                            label="Pilih Provinsi"
                            handleChangeValue={this._changeValueProvinsi}
                        />
                        
                        <CustomSelect
                            title="Kota *"
                            items={this.state.city}
                            label="Pilih Kota"
                            handleChangeValue={this._changeValueCity}
                        />
                        
                        <CustomSelect
                            title="Kecamatan *"
                            items={this.state.kec}
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
                        <View style={styles.mapNumber}>
                            <CustomTextInput
                                changeKeyboard="numeric"
                                handleChangeText={(room_length) => this.setState({ room_length })}
                                title="Panjang Kost *" placeholder="Masukan Panjang" />

                            <CustomTextInput
                                changeKeyboard="numeric"
                                handleChangeText={(room_width) => this.setState({ room_width })}
                                title="Lebar Kost *" placeholder="Masukan Lebar" />
                        </View>
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={styles.uploadKostImg}>Gambar Kost *</Text>
                            <TouchableHighlight onPress={this.handleUploadImage} style={styles.btnGambar}>
                                <Text style={styles.textGambar}>Pilih Gambar</Text>
                            </TouchableHighlight>
                            {
                                this.state.image && <Image source={this.state.image} style={{flex: 1, height: 400, marginVertical: 10}} />
                            }
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