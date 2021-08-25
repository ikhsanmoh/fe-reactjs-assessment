
const axios = require('axios')

const API = axios.create({
  baseURL: 'https://api.kerjoo.com/api/v1/reference'
})

export default API