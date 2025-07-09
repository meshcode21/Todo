import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://todo-backend-production-57bf.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
