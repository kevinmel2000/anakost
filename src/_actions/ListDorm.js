import axios from 'axios'

export function allDorm() {
    return {
      type: 'ALL_DORM',
      payload: axios({
        method: 'GET',
        url: 'https://anakost-api.herokuapp.com/api/v2/kost'
      })
    }
}