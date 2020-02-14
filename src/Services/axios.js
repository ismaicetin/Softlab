
import axios from 'axios'
var API_URL = 'https://api.foursquare.com/v2' 
var params = []
params['client_id'] = 'OUGK3O5TLXFFH2TPYIPKUQKPB32E0KHD0Z130YPLGUWRX5PE';
params['client_secret'] = 'FCTLZXQQVMZZADCYNP20HOYLEJZKUFMRNPI0QARD3ORQRZDI';
params['v'] = '20200214'; 

function parseError(messages) {
    // error
    if (messages) {
        if (messages instanceof Array) {
            return Promise.reject({ messages: messages })
        } else {
            return Promise.reject({ messages: [messages] })
        }
    } else {
        return Promise.reject({ messages: ['Bir hata oluştu'] })
    }
}


let instance = axios.create({
    baseURL: API_URL
})





// request header
instance.interceptors.request.use((config) => { 
    config.params = { client_id: params.client_id,'client_secret': params.client_secret ,'v': params.v}
    return config
}, error => {
    return Promise.reject(error)
})




// response parse
instance.interceptors.response.use((response) => {
    console.log(response.config.url + "  =>  ");
    console.log(response.data);
    return response.data;
}, error => {
    console.warn('Error status', error)
    // return Promise.reject(error)
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
})






export const http = instance