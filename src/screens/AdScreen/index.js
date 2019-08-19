
import React from 'react';
import {View, ScrollView, TouchableHighlight, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CreateForm from '../../components/CreateAdForm';
import MapView, {Marker} from 'react-native-maps';

export default class IklanScreen extends React.Component {

    constructor() {
        super()
        this.state = {
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

    onRegionChange = region => {
        this.setState({ region });
    }

    render() {

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

                <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical: 6}}>
                    <View style={styles.IklanForm}>
                        <CreateForm title="Nama Kost *" placeholder="Masukan Nama Kost di sini" />
                        <CreateForm title="Pemilik Kost *" placeholder="Masukan Nama Pemilik Kost di sini" />
                        <CreateForm title="Nomor Handphone Pemilik Kost *" placeholder="Masukan No HP (08964xxx) di sini" />
                        <CreateForm title="Provinsi *" placeholder="Masukan Nama Provinsi" />
                        <CreateForm title="Kota *" placeholder="Masukan Nama Kota" />
                        <CreateForm title="Kecamatan *" placeholder="Masukan Nama Kecamatan" />
                        <View style={{position: 'relative'}}>
                            <Text style={{marginVertical: 8, fontWeight:'bold'}}>
                                Search alamat/area kost anda di Peta, Kemudian pindahkan pin di peta ke lokasi tepat kost anda
                            </Text>
                            <TextInput placeholder="Cari Alamat Kost" style={styles.TextInputSearch} />

                            <Icon name='search' size={20} style={styles.iconSearch} />

                            <View style={{height: 200, marginTop: 6}}>
                                <MapView style={{flex: 1}}
                                    initialRegion={this.state.region}
                                    onRegionChange={this.onRegionChange}
                                />
                            </View>
                        </View>
                        <View style={{paddingVertical: 8}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold',marginBottom: 6}}>Gambar Kost *</Text>
                            <TouchableHighlight style={styles.btnGambar}>
                                <Text style={styles.textGambar}>Pilih Gambar</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={styles.btnTambah}>
                            <Text style={styles.textButton}>Tambah Kost</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        flex: 1
    },
    Header : {
        justifyContent:'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#cf0e04',
        paddingBottom: 6
    },
    textHeader : {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    },
    btnBack : {
        position: 'absolute', 
        left: 5, 
        top: '6%',
        padding: 8,
        // backgroundColor: '#ddd',
    },
    IklanForm : {
        marginHorizontal: 15,
        marginBottom: 10,
    },
    TextInputSearch : {
        paddingVertical: 6,
        borderRadius: 6,
        borderColor: '#ddd',
        borderWidth: .5,
        paddingLeft: 50,
        paddingRight: 8
    },
    iconSearch : {
        position: 'absolute',
        top: '21%',
        left: 10
    },
    btnTambah : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 15, 
        paddingVertical: 8, 
        backgroundColor: '#119c3f', 
        borderRadius: 100/15, 
        borderWidth: 1.5, 
        borderColor: '#ddd'
    },
    textButton : {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    btnGambar : {
        borderRadius : 8,
        padding: 8,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ddd',
    },
    textGambar : {
        color : '#000',
        fontWeight: 'bold'
    }
})



// import React from 'react';
// import {View, ScrollView, TouchableHighlight, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// import CreateAdForm from '../../components/CreateAdForm';
// import LoginScreen from '../LoginScreen';

// export default class AdScreen extends React.Component {
//     render() {

//         const status = this.props.navigation.getParam('status', 0);

//         if(status === 1) {
//             return (
//                 <View style={{
//                     backgroundColor: 'white',
//                     flex: 1
//                 }}>
//                     <View style={{
//                         justifyContent:'center',
//                         alignItems: 'center',
//                         height: '10%',
//                         backgroundColor: '#cf0e04'
//                     }}>
//                         <TouchableHighlight style={{position: 'absolute', left: 15, top: 15}} onPress={() => this.props.navigation.goBack()}>
//                             <Icon name='arrow-alt-circle-left' color='#ddd' size={25} />
//                         </TouchableHighlight>
//                         <Text style={{
//                             fontSize: 26,
//                             color : '#ddd',
//                             fontWeight: 'bold',
//                         }}>
//                             Tambah Data Iklan
//                         </Text>
//                     </View>

//                     <ScrollView showsVerticalScrollIndicator={false} style={{
//                         paddingVertical: 6,
//                     }}>
//                         <View style={{
//                             marginHorizontal: 15,
//                             marginBottom: 10,
//                         }}>
//                             <CreateAdForm title="Nama Kost *" placeholder="Masukan Nama Kost di sini" />
//                             <CreateAdForm title="Alamat Kost *" placeholder="Masukan Nama Jalan, Kecamatan, Kelurahan, dll" />
//                             <CreateAdForm title="Pemilik Kost *" placeholder="Masukan Nama Pemilik Kost di sini" />
//                             <CreateAdForm title="Nomor Handphone Pemilik Kost *" placeholder="Masukan No HP (08964xxx) di sini" />
//                             <CreateAdForm title="Pengelola Kost *" placeholder="Masukan Nama Pengelola Kost di sini" />
//                             <CreateAdForm title="Nomor Handphone Pengelola Kost *" placeholder="Masukan No HP (08132xxx) di sini" />
//                             <View style={{paddingVertical: 8}}>
//                                 <Text style={{fontSize: 16, fontWeight: 'bold',marginBottom: 6}}>Gambar Kost *</Text>

//                             </View>
//                             <TouchableHighlight style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 8, backgroundColor: '#119c3f', borderRadius: 100/15, borderWidth: 1.5, borderColor: '#ddd'}}>
//                                 <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Tambah Kost</Text>
//                             </TouchableHighlight>
//                         </View>
//                     </ScrollView>
//                 </View>
//             )
//         } else {
//             return <LoginScreen/>
//         }
//     }
// }
