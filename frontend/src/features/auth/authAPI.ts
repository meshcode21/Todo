import axios from '@/api/axios'

export const loginAPI = async (credentials: { email: string; password: string }) => {
  const res = await axios.post('/auth/login', credentials)
  return res.data
}

export const signupAPI = async (data: { name: string; email: string; password: string }) => {
  const res = await axios.post('/auth/register', data)
  return res.data
}
