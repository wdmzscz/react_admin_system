import React, {Component} from 'react';
import menuList from '../../../config/menuConfig';
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
   {
      userInfo:state.userInfo,
      title:state.saveTitle,
   }),{
      deleteUserInfo:CreateDeleteUserInfoAction
   })
@withRouter

class Header extends Component{

   myInterval

   state={
      isFull:false,
      date:moment().format('MMMM Do YYYY, h:mm:ss a'),
      title:''
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

   getTitle=()=>{
      let pathKey=this.props.location.pathname.split('/').reverse()[0];
      let title ='';
      menuList.forEach((item)=>{
         if(item.children instanceof Array){
            let temp = item.children.find((citem)=>{
               return citem.key===pathKey;
            })
            if(temp) title = temp.title;
         }else{
            if(pathKey === item.key) title = item.title;
         }
      })
      this.setState({title:title})
   }

   componentDidMount(){
      //set full screen size
      screenfull.on('change',()=>{
         let isFull = !this.state.isFull;
         this.setState({isFull})
      })
      this.myInterval = setInterval(()=>{
        this.setState({date:moment().format('MMMM Do YYYY, h:mm:ss a')})
      },1000)
      this.getTitle()
   }

   componentWillUnmount(){
      clearInterval(this.myInterval)
   }

    render(){
       let {user} = this.props.userInfo; 
       let {location} = this.props;
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
                  {this.props.title || this.state.title}
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