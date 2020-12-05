import axios from 'axios';
import NPROGRESS from 'nprogress';
import qs from "querystring";
import 'nprogress/nprogress.css'

const instance = axios.create({
    timeout: 10000,
  });


instance.interceptors.request.use( (config)=> {
    // Do something before request is sent
    NPROGRESS.start();
    console.log('config',config)
    const {method,data} = config;
    if(method.toLowerCase() === 'post' && typeof data === 'object'){
      config.data = qs.stringify(data)
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use( (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NPROGRESS.done()
    return response;
  }, (error) => {
    NPROGRESS.done()
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  })


export default instance