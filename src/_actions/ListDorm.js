import axios from 'axios'
import Global_URI from '../environment/Global_URI'

export function allDorm() {
    return {
      type: 'ALL_DORM',
      payload: axios({
        method: 'GET',
        url: `${Global_URI.host}kost`
      })
    }
}

export function addDorm(data, token) {
  return {
    type : 'ADD_DORM',
    payload : axios({
      url: `${Global_URI.host}kost`,
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `bearer ${token}`
      }
    })
  }
}

export function sortDorm(key, value) {
  return {
    type : 'GET_DORM_SORT',
    payload : axios.get(`${Global_URI.host}kost/sort/${key}/${value}`)
  }
}