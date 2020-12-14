import React, {Component} from 'react';
import '../css/header.less';
import {FullscreenOutlined,FullscreenExitOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import screenfull from 'screenfull'
import { connect } from 'react-redux';

@connect(state=>(
   {userInfo:state.userInfo
   }),{})

class Header extends Component{

   state={
      isFull:false
   }

   fullScreen=()=>{
      screenfull.toggle()
   }

   componentDidMount(){
      //set full screen size
      screenfull.on('change',()=>{
         let isFull = !this.state.isFull;
         this.setState({isFull})
      })
   }

    render(){
       let {user} = this.props.userInfo
       return(
         <header className='header'>
            <div className='header-top'>
               <Button size='small' onClick={this.fullScreen}>
               {this.state.isFull
                  ?<FullscreenOutlined />
                  :<FullscreenExitOutlined />}
               </Button>
               <span className='userName'>welcome,{user}</span>
               <Button type='link'>Log out</Button>
            </div>
            <div className='header-bottom'>
               <div className='header-bottom-left'>
                  Bar
               </div>
               <div className='header-bottom-right'>
                  2020-12-13
               </div>
            </div>
         </header>
       )
    }
}

export default Header