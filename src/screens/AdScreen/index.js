import React from 'react';
import {View, ScrollView, TouchableHighlight, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CreateAdForm from '../../components/CreateAdForm';
import LoginScreen from '../LoginScreen';

export default class AdScreen extends React.Component {
    render() {

        const status = this.props.navigation.getParam('status', 0);

        if(status === 1) {
            return (
                <View style={{
                    backgroundColor: 'white',
                    flex: 1
                }}>
                    <View style={{
                        justifyContent:'center',
                        alignItems: 'center',
                        height: '10%',
                        backgroundColor: '#cf0e04'
                    }}>
                        <TouchableHighlight style={{position: 'absolute', left: 15, top: 15}} onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-alt-circle-left' color='#ddd' size={25} />
                        </TouchableHighlight>
                        <Text style={{
                            fontSize: 26,
                            color : '#ddd',
                            fontWeight: 'bold',
                        }}>
                            Tambah Data Iklan
                        </Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{
                        paddingVertical: 6,
                    }}>
                        <View style={{
                            marginHorizontal: 15,
                            marginBottom: 10,
                        }}>
                            <CreateAdForm title="Nama Kost *" placeholder="Masukan Nama Kost di sini" />
                            <CreateAdForm title="Alamat Kost *" placeholder="Masukan Nama Jalan, Kecamatan, Kelurahan, dll" />
                            <CreateAdForm title="Pemilik Kost *" placeholder="Masukan Nama Pemilik Kost di sini" />
                            <CreateAdForm title="Nomor Handphone Pemilik Kost *" placeholder="Masukan No HP (08964xxx) di sini" />
                            <CreateAdForm title="Pengelola Kost *" placeholder="Masukan Nama Pengelola Kost di sini" />
                            <CreateAdForm title="Nomor Handphone Pengelola Kost *" placeholder="Masukan No HP (08132xxx) di sini" />
                            <View style={{paddingVertical: 8}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold',marginBottom: 6}}>Gambar Kost *</Text>

                            </View>
                            <TouchableHighlight style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 8, backgroundColor: '#119c3f', borderRadius: 100/15, borderWidth: 1.5, borderColor: '#ddd'}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Tambah Kost</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return <LoginScreen/>
        }
    }
}
