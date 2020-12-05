
import {SAVE_USER_INFO} from '../action_types'


let initState = {
    user:{},
    token:'',
    isLogin:false
}
export default function test_reducer(preState=initState,action){
    const {type,data} = action;
    let newState;

    switch(type) {
        case SAVE_USER_INFO:
            newState = {
                user:data.user,
                token:data.token,
                islogin:true
            }
            return newState
        
        default:
           return preState;
    }

}
