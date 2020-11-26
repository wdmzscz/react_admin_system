
import myAxios from './myAxios';
import qs from 'querystring';

//login request
export const reqLogin=(username,password)=>{ 
    return   myAxios.post('http://localhost:3000/login',{username,password})
}
