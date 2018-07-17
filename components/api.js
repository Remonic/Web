import axios from 'axios'
const url = 'http://localhost:8080/api/'

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

  static register (name, email, password) {
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

  static login (email, password, rememberMe) {
    return axios.post(
      '/user/login',
      {
        email,
        password,
        rememberMe
      },
      this.data()
    )
  }

  static getSetup () {
    return axios.get(
      '/setup',
      this.data({
        transformResponse (data) {
          return data.setup
        }
      })
    )
  }

  static setup (database) {
    return axios.post(
      '/setup',
      {
        database
      },
      this.data()
    )
  }
}
