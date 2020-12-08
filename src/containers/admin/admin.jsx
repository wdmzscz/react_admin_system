import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Admin extends React.Component{

   componentDidMount(){
      console.log('ad')
   }

   // render method need to 'return', you should better use redirect
    render(){
       const {user, isLogin} = this.props.userInfo
       if(!isLogin){
         //this.props.history.replace('/login')
         return <Redirect to='/login'/>
       }else{
         return(
            <div>admin {user}</div>
         )
       }
    }
}

export default connect(state=>({userInfo:state.userInfo}),
   {

})(Admin);