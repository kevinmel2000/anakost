import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Image, Modal} from 'react-native';

// Use
// Icon From Font Awesome 5
// Calender Picker
// Checkbox
import Icon from 'react-native-vector-icons/FontAwesome5';
import CalendarPicker from 'react-native-calendar-picker';
import CheckBox from 'react-native-check-box';

export default class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
          isChecked: false,
          modalVisible: false,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        this.setState({
          //Setting the value of the date time
          selectedStartDate:
            date + '/' + month + '/' + year,
        });
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {

        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => alert('Please click Button')}
                    width={80}>
                    <View>
                        <View>
                            <CalendarPicker
                                onDateChange={this.onDateChange}
                            />

                            <TouchableHighlight style={{alignItems: 'center',backgroundColor: '#02ba17', padding: 8}}
                                onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Selanjutnya</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-alt-circle-left' color='#ddd' size={25} />
                    </TouchableHighlight>
                    <Text style={styles.textHeader}>Booking Kost</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.SelectDateTime}>
                        {/* Tanggal Masuk */}
                        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
                            <View style={styles.Date}>
                                <Text style={styles.DateTitle}>Tanggal Masuk</Text>
                                <View style={styles.DateInput}>
                                    <Text style={styles.textDate}>
                                        { startDate } 
                                    </Text>
                                    <Icon name='calendar-alt' size={15} color='#cf0e04' />
                                </View>
                                {/*  */}
                            </View>
                        </TouchableHighlight>
                        {/* Durasi Sewa */}
                        <View style={styles.Date}>
                            <Text style={styles.DateTitle}>Durasi Sewa</Text>
                            <View style={styles.DateInput}>
                                <Text style={styles.textDate}>
                                    { startDate } 
                                </Text>
                                <Icon name='chevron-down' size={15} color='#000' onPress={() => alert('Ok')} />
                            </View>
                        </View>
                        {/* Tanggal Keluar */}
                        <View style={styles.Date}>
                            <Text style={styles.DateTitle}>Tanggal Keluar</Text>
                            <View style={styles.DateInput}>
                                <Text style={styles.textDate}>
                                    { startDate } 
                                </Text>
                            </View>
                            {/* <CalendarPicker
                                onDateChange={this.onDateChange}
                            /> */}
                        </View>
                    </View>
                    {/* Detail Kost */}
                    <View style={styles.KostDetail}>
                        <View style={styles.Image}>
                            <Image source={require('../../assets/image/book-kost-satu.jpg')} style={styles.ImageData} />
                        </View>
                        <View style={styles.Kost}>
                            <Text style={styles.KostTitle}>Kost AnaRooms Nyaman Tidur Mimpi Indah</Text>
                            <Text style={styles.KostPrice}>Rp. 1.750.000/bulan</Text>
                        </View>
                    </View>
                    {/* Ringkasan Penyewa */}
                    <View style={styles.Ringkasan}>
                        <View style={styles.SpaceBetween}>
                            <Text style={styles.DateTitle}>Data Penyewa</Text>
                            <TouchableHighlight>
                                <Text style={{color: '#02ba17'}}>Ubah</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.SpaceBetween}>
                            <Text style={styles.TitleRingkasan}>Nama Lengkap</Text>
                            <Text style={styles.DateTitle}>Risman Abdilah</Text>                            
                        </View>
                        <View style={styles.SpaceBetween}>
                            <Text style={styles.TitleRingkasan}>Jenis Kelamin</Text>
                            <Text style={styles.DateTitle}>Laki-Laki</Text> 
                        </View>
                        <View style={styles.SpaceBetween}>
                            <Text style={styles.TitleRingkasan}>No Handphone</Text>
                            <Text style={styles.DateTitle}>089647329246</Text>                            
                        </View>
                        <View style={styles.SpaceBetween}>
                            <Text style={styles.TitleRingkasan}>Pekerjaan</Text>
                            <Text style={styles.DateTitle}>Programmer</Text> 
                        </View>
                    </View>
                    {/* Biaya Lain */}
                    <View style={styles.MorePrice}>
                        <Text style={styles.MorePriceTitle}>Biaya Lain</Text>
                        <Text>-</Text>
                    </View>
                    {/* FAQ */}
                    <View style={styles.FAQ}>
                        <CheckBox
                            style={styles.FAQCheckbox}
                            onClick={()=>{
                            this.setState({
                                isChecked:!this.state.isChecked
                            })
                            }}
                            isChecked={this.state.isChecked}
                        />
                        <Text style={styles.FAQText}>Saya menyetujui syarat dan memastikan data diatas benar</Text>
                    </View>
                    {/* Button Booking */}
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('BookList')} style={styles.btnBook}>
                        <Text style={{color: '#fff'}}>Booking</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

// Custom Styles
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    header : {
        justifyContent:'center',
        height: 60,
        backgroundColor: '#cf0e04'
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
        // padding: 10,
        margin: 15,
        // backgroundColor: '#ddd',
    },
    main : {
        flex: 1,
        paddingHorizontal: 17,
    },
    SelectDateTime : {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomColor: '#0dd',
        borderBottomWidth: 0.6
    },
    Date : {
        paddingRight: 15,
    },
    DateTitle : {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    DateInput: {
        flexDirection: 'row',
        paddingVertical: 6,
        alignItems: 'center',
    },
    textDate : {
        marginRight : 10,
    }, 
    KostDetail : {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomColor: '#0dd',
        borderBottomWidth: 0.6,
    },
    Image : {
        width : '25%',
        height: 80,
        marginRight: 8,
    },
    ImageData : {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode : 'cover',
        borderRadius : 150/25
    },
    Kost : {
        justifyContent: 'space-around',
        width : '70%',
        paddingHorizontal: 8,
    },
    KostTitle : {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
    },
    KostPrice : {
        fontSize: 14,
        color: '#cf0e04',
        fontWeight: '600',
        justifyContent: 'flex-end',
    },
    Ringkasan : {
        paddingVertical : 17,
        borderBottomColor: '#0dd',
        borderBottomWidth: 0.6,
    },
    SpaceBetween : {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TitleRingkasan : {
        fontSize: 14,
        color: '#ddd',
    },
    MorePrice : {
        paddingVertical : 17
    },
    MorePriceTitle : {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        marginBottom : 8,
    },
    FAQ : {
        flexDirection: 'row',
    },
    FAQCheckbox: {
        width: '10%',
        paddingRight: 10,
    },
    FAQText : {
        width: '90%',
    },
    btnBook : {
        backgroundColor: '#02ba17',
        marginVertical: 10,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

