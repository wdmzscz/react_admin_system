import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {CreateDeleteUserInfoAction} from '../../redux/actions_creators/login_action'

class Admin extends React.Component{

   componentDidMount(){
   }

   logOut=()=>{
      this.props.deleteUserInfo();
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
            </div>
         )
       }
    }
}

export default connect(state=>({userInfo:state.userInfo}),
   {
      deleteUserInfo:CreateDeleteUserInfoAction
})(Admin);