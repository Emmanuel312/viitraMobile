import axios from 'axios'

const api = axios.create({baseURL:'http://www.livroiphone.com.br/carros'})

export default api