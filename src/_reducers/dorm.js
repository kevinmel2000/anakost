const initialState = {
    // State
    name: null,
    price: null,
    typeValue: null,
    description: null,
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
    },
    room_length: null,
    room_width: null,
    image : null
}

export default dorm = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_ALL' : 
        return alert('Oke')

        default :
        return state
    }
}