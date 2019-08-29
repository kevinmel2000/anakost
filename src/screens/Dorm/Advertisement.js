import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, Text, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker } from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

import { addDorm } from '../../_actions/ListDorm'
import CustomTextInput from '../../components/Form/CustomTextInput';
import CustomSelect from '../../components/Form/CustomSelect';
import CustomLocation from '../../components/Form/CustomLocation';
import Loading from '../../components/Page/Loading';

class Advertisement extends Component {

    constructor() {
        super() 
        this.state = {
            inputName : '',
            inputType : '',
            inputDescription : '',
            inputRoomLength : '',
            inputRoomWidth : '',
            // Address
            province : [],
            city : [],
            kec : [],

            // Address ID
            provinceID : '',
            cityID : '',
            kecID : '',

            // Input Address
            InputAddress : {
                province : '',
                city     : '',
                kec      : '',
            },

            // Maps Region
            region: {
                latitude: -6.301281,
                longitude: 106.735149,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },

            // Value Type
            type : [
                { label: 'Laki-Laki', value: 'Laki-Laki' },
                { label: 'Perempuan', value: 'Perempuan' },
            ],

            // Image
            imageSource : null,

            // Data Item
            dataItem : {
                name : '',
                type : '',
                description : '',
                price : '',
                province : '',
                city : '',
                kec : '',
                latitude : '',
                longitude : '',
                room_length : '',
                room_width : '',
                image : ''
            }
        }
    }

    /*  Fetch Data Province From API
     *  Save to Variable
     *  Save to State from variable
     */
     componentDidMount () {

        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').then((res) => {
            let province = res.data.semuaprovinsi.map(data => {return {label : data.nama, value : data.id }} )

            this.setState({province})

        })
    }

    /*  Handle Value Province
     *  Save to State
     *  If Province Selected, Run Function Fetch City
     */
    _changeValueProvinsi = async(provinceID) => {
        await this.setState({ provinceID })
        
        if(provinceID != null ) {
            this._getCityData(provinceID)
        }
    }

    /*   Fetching Data City From API
     *   Save to Variable
     *    Save to State from variable
     */
    _getCityData = (provinceID) => {
        
        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/'+ provinceID +'/kabupaten').then((res) => {
            let city = res.data.kabupatens.map(data => {return {label : data.nama, value : data.id }} )
            this.setState({city})

        })
    }

    /*  Handle Value City
     *  Save to State
     *  If City Selected, Run Function Fetch Kec
     */
     _changeValueCity = async(cityID) => {

        await this.setState({cityID})
        
        if( cityID != null) {
            this._getKecData(cityID)
        }
    }

    /*   Fetching Data Kec From API
     *   Save to Variable
     *   Save to State from variable
     */
    _getKecData = ( cityID ) => {

        Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/'+ cityID +'/kecamatan').then((res) => {

            let kec = res.data.kecamatans.map(data => {return {label : data.nama, value: data.id}})

            this.setState({ kec })
        })
    }

    // Handle Value City
    // Save to State
    // If Kec Selected, Switch Value with Name
    _changeValueKec = async(kecID) => {

        await this.setState({kecID})

    }

    // Handle Change Region
    onRegionChange = region => {
        this.setState({ region });
    }

    /*  Handle Upload Image
     *  Using Image Picker
     */
    handleUpload = async () => {

        const options = {
            title: "Pilih Gambar",
            takePhotoButtonTitle: "Kamera",
            chooseFromLibraryButtonTitle: "Koleksi",
            cancelButtonTitle: "Batal"
        }

        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('Batal Upload');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let tmpPhoto = {
                  uri: response.uri,
                  type: response.type,
                  name: response.fileName,
                };
                // Set State Image
                const source = tmpPhoto;

                this.setState({
                  imageSource : source
                });
            }

        })

    }

    /*  Handle Save Button
     *  Get Data From State
     *  Insert With Axios
     */
    _saveDataKost = async() => {
        try {
            const token = await AsyncStorage.getItem('userToken')

            const {provinceID, cityID, kecID} = this.state

            if(provinceID && cityID && kecID) {
                let InputAddress = {
                    province: "",
                    city: "",
                    kec: ""
                }
    
                // Filter & Get Name of Province
                InputAddress.province = this.state.province.filter(
                    data => data.value === this.state.provinceID
                )[0].label;
    
                // Filter & Get Name of City
                InputAddress.city = this.state.city.filter(
                    data => data.value === this.state.cityID
                )[0].label;
    
                // Filter & Get Name of Kec
                InputAddress.kec = this.state.kec.filter(
                    data => data.value === this.state.kecID
                )[0].label;
    
                // Save or Set to State
                await this.setState({
                    InputAddress
                })
            }

            await this.setState({
                dataItem : {
                    name : this.state.inputName,
                    type : this.state.inputType,
                    description : this.state.inputDescription,
                    price : parseInt(this.state.inputPrice),
                    province : this.state.InputAddress.province,
                    city : this.state.InputAddress.city,
                    kec : this.state.InputAddress.kec,
                    latitude : this.state.region.latitude.toString(),
                    longitude : this.state.region.longitude.toString(),
                    room_length : parseInt(this.state.inputRoomLength),
                    room_width : parseInt(this.state.inputRoomWidth),
                    image : this.state.imageSource
                }
            })

            let data = new FormData();

            data.append('name', this.state.dataItem.name);
            data.append('type', this.state.dataItem.type);
            data.append('description', this.state.dataItem.description);
            data.append('price', this.state.dataItem.price);
            data.append('province', this.state.dataItem.province);
            data.append('city', this.state.dataItem.city);
            data.append('kec', this.state.dataItem.kec);
            data.append('latitude', this.state.dataItem.latitude);
            data.append('longitude', this.state.dataItem.longitude);
            data.append('room_length', this.state.dataItem.room_length);
            data.append('room_width', this.state.dataItem.room_width);
            data.append('image', this.state.dataItem.image);

            this.props.dispatch(addDorm(data, token))

        } catch (error) {
            
        }
    }
    

    render() {

        return (

            <View style={styles.container}> 

                {/* 
                    Start Header Component
                */}
                <View style={styles.Header}>
                    <TouchableHighlight style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-alt-circle-left' color='#ddd' size={25} />
                    </TouchableHighlight>
                    <Text style={styles.textHeader}>
                        Tambah Data Iklan
                    </Text>
                </View>
                {/* 
                    End Header Component
                */}

                {
                    this.props.Dorm.isLoading && <Loading />
                }

                {
                    this.props.Dorm.isDone ? this.props.navigation.navigate('Home') : false
                }

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollFormAds}>

                    <View style={styles.IklanForm}>

                        {/* Input Name */}
                        <CustomTextInput
                            handleChangeText={(inputName) => this.setState({ inputName })}
                            title="Nama Kost *" placeholder="Masukan Nama Kost di sini" 
                        />

                        {/* Input Type */}
                        <CustomSelect
                            title="Jenis Kost *"
                            items={this.state.type}
                            label="Pilih Jenis Kost"
                            handleChangeValue={(inputType) => this.setState({inputType})}
                        />

                        {/* Input Description */}
                        <CustomTextInput
                            multiline={true}
                            handleChangeText={(inputDescription) => this.setState({inputDescription})}
                            title="Deskripsi *" placeholder="Masukan Deskripsi Kost di sini" 
                        />

                        {/* Input Price */}
                        <CustomTextInput
                            changeKeyboard="numeric"
                            handleChangeText={(inputPrice) => this.setState({ inputPrice })}
                            title="Harga Kost Perbulan *" placeholder="Masukan Harga Kost di sini" />
                        
                        {/* Input Province */}
                        <CustomSelect
                            title="Provinsi *"
                            items={this.state.province}
                            label="Pilih Provinsi"
                            handleChangeValue={this._changeValueProvinsi}
                        />
                        
                        {/* Input City */}
                        <CustomSelect
                            title="Kota *"
                            items={this.state.city}
                            label="Pilih Kota"
                            handleChangeValue={this._changeValueCity}
                        />

                        {/* Input Kec */}
                        <CustomSelect
                            title="Kecamatan *"
                            items={this.state.kec}
                            label="Pilih Kecamatan"
                            handleChangeValue={this._changeValueKec}
                        />

                        {/* Maps */}
                        <View style={{ position: 'relative' }}>
                            {/* Search Maps */}
                            <Text style={styles.textformAdsMap}>
                                Search alamat/area kost anda di Peta, Kemudian pindahkan pin di peta ke lokasi tepat kost anda
                            </Text>
                            <TextInput placeholder="Cari Alamat Kost" style={styles.TextInputSearch} />
                            <Icon name='search' size={20} style={styles.iconSearch} />
                            {/* Map View */}
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

                        {/* Latitude & Longitude */}
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
                        
                        {/* Room Length & Width */}
                        <View style={styles.mapNumber}>
                            <CustomTextInput
                                changeKeyboard="numeric"
                                handleChangeText={(inputRoomLength) => this.setState({ inputRoomLength })}
                                title="Panjang Kost *" placeholder="Masukan Panjang" />

                            <CustomTextInput
                                changeKeyboard="numeric"
                                handleChangeText={(inputRoomWidth) => this.setState({ inputRoomWidth })}
                                title="Lebar Kost *" placeholder="Masukan Lebar" />
                        </View>

                        {/* Upload Image */}
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={styles.uploadKostImg}>Gambar Kost *</Text>
                            <TouchableHighlight onPress={this.handleUpload} style={styles.btnGambar}>
                                <Text style={styles.textGambar}>Pilih Gambar</Text>
                            </TouchableHighlight>
                            {
                                this.state.imageSource && <View style={{flex: 1, height: 350, marginVertical: 10}}><Image source={this.state.imageSource} style={{flex:1,width: undefined, height: undefined, resizeMode: 'cover'}} /></View>
                            }
                        </View>

                        {/* Button Add */}
                        <TouchableHighlight onPress={this._saveDataKost} style={styles.btnTambah}>
                            <Text style={styles.textButton}>Tambah Kost</Text>
                        </TouchableHighlight>

                    </View>

                </ScrollView>
                {/* End Content */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Dorm: state.ListDorm
    }
}

export default connect(mapStateToProps)(Advertisement);
  

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