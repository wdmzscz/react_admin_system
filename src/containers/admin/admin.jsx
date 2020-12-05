import React from 'react';
import {connect} from 'react-redux';

class Admin extends React.Component{

   componentDidMount(){
      console.log('ad')
   }

    render(){
       return(
          <div>admin</div>
       )
    }
}

export default connect(state=>({userInfo:state.userInfo}),
   {

})(Admin);