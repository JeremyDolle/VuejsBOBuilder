import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost/api',
})

// instance.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default instance
