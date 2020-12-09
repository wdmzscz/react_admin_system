import {SAVE_USER_INFO,DELETE_USER_INFO} from '../action_types';
import {v1 as uuid} from 'uuid';


export const createSaveUserInfoAction = (value)=>{
    console.log('value',value)
    let {data} = value
    let token = uuid()
    localStorage.setItem('user',JSON.stringify(data.username))
    localStorage.setItem('token',JSON.stringify(token))
    localStorage.setItem('isLogin',true)
    return  { type:SAVE_USER_INFO, data:data}
}

export const CreateDeleteUserInfoAction = ()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.setItem('isLogin',false)
    return  { type:DELETE_USER_INFO, data:''}
}