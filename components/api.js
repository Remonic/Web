import axios from 'axios'
const url = 'http://localhost:8081/'

export default class RemonicApi {
  static data (data) {
    return Object.assign(
      {
        baseURL: url,
        responseType: 'json'
      },
      data
    )
  }

  static register (name = '', email = '', password = '') {
    return axios.post(
      '/user/register',
      {
        name,
        email,
        password
      },
      this.data()
    )
  }
}