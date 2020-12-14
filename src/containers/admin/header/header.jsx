import React, {Component} from 'react';
import '../css/header.less';
import {FullscreenOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import screenfull from 'screenfull'

export default class Header extends Component{

   state={
      isFull:false
   }

   fullScreen=()=>{
      screenfull.toggle()
   }

   componentDidMount(){
      screenfull.on('change',()=>{
         let isFull = !this.state.isFull;
         this.setState({isFull})
      })
   }

    render(){
       return(
         <header className='header'>
            <div className='header-top'>
               <Button size='small' onClick={this.fullScreen}>
               {this.state.isFull
                  ?<FullscreenOutlined />
                  :<FullscreenExitOutlined />}
               </Button>
               <span className='userName'>welcome</span>
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