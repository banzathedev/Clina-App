import Vue from 'vue'
import axios from 'axios'


const token = localStorage.getItem('tokenv2')
  


    

Vue.use({
    install(Vue) {
     Vue.prototype.$http = axios.create({
         baseURL: 'http://localhost:8000/',
         
     }) 
     Vue.prototype.$http.interceptors.request.use(
        async (config) => {
          config.headers.Authorization = ` Bearer ${token}`
          console.log(localStorage)
          return config;
        }
      ); 
    }
})


