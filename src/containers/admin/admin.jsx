import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {reqCategoryList} from '../../api/index'
import {CreateDeleteUserInfoAction} from '../../redux/actions_creators/login_action'

class Admin extends React.Component{

   componentDidMount(){
   }

   logOut=()=>{
      this.props.deleteUserInfo();
   }

   demo=async()=>{
      let result = await reqCategoryList()
      console.log('result',result);
   }

   // render method need to 'return', you should better use redirect
    render(){
       const {user, isLogin} = this.props.userInfo
       if(!isLogin){
         //this.props.history.replace('/login')
         return <Redirect to='/login'/>
       }else{
         return(
            <div>
               <div>admin {user} </div>
               <button onClick={this.logOut}>LogOut</button> 
               <button onClick={this.demo}>list</button>      
            </div>
         )
       }
    }
}

export default connect(state=>({userInfo:state.userInfo}),
   {
      deleteUserInfo:CreateDeleteUserInfoAction
})(Admin);