
import myAxios from './myAxios';
import {BASE_URL} from '../config/index'

//login request
export const reqLogin=(username,password)=>{ 
    return   myAxios.post(`${BASE_URL}/login`,{username,password})
}

export const reqCategoryList=()=>{ 
    return   myAxios.get(`${BASE_URL}/manage/category/list`)
}
