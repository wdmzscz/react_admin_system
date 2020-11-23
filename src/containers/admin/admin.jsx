import React from 'react';
import {connect} from 'react-redux';
import {createDemo2Action,createDemo1Action} from '../../redux/actions_creators/test_action'

class Admin extends React.Component{
    render(){
       return(
          <div>admin</div>
       )
    }
}

export default connect(state=>({test:state.test}),
   {
   demo1:createDemo1Action,
   demo2:createDemo2Action
})(Admin)