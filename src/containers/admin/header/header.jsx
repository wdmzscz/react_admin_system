import React, {Component} from 'react';
import '../css/header.less';
import {FullscreenOutlined,FullscreenExitOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import {Button, Modal} from 'antd';
import {withRouter} from 'react-router-dom';
import {CreateDeleteUserInfoAction} from '../../../redux/actions_creators/login_action';
import screenfull from 'screenfull';
import moment from 'moment';
import { connect } from 'react-redux';

const { confirm } = Modal;

@connect(state=>(
   {userInfo:state.userInfo,
   }),{
      deleteUserInfo:CreateDeleteUserInfoAction
   })
@withRouter

class Header extends Component{

   state={
      isFull:false,
      date:moment().format('MMMM Do YYYY, h:mm:ss a')
   }

   fullScreen=()=>{
      screenfull.toggle()
   }

   logout=()=>{ 
      let {deleteUserInfo} = this.props
      confirm({
         title: 'Log Out',
         icon: <ExclamationCircleOutlined />,
         content: 'Are you sure to log out?',
         onOk() {
           deleteUserInfo();
           console.log('OK');
         },
         onCancel() {
           console.log('Cancel');
         },
      });
   }

   componentDidMount(){
      //set full screen size
      screenfull.on('change',()=>{
         let isFull = !this.state.isFull;
         this.setState({isFull})
      })
      setInterval(()=>{
        this.setState({date:moment().format('MMMM Do YYYY, h:mm:ss a')})
      },1000)

      console.log('this.props',this.props)
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
               <Button type='link' onClick={this.logout}>Log out</Button>
            </div>
            <div className='header-bottom'>
               <div className='header-bottom-left'>
                  Bar
               </div>
               <div className='header-bottom-right'>
                  {this.state.date}
               </div>
            </div>
         </header>
       )
    }
}

export default Header