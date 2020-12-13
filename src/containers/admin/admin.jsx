import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {reqCategoryList} from '../../api/index';
import { Layout } from 'antd';
import Header from './header/header'
import {CreateDeleteUserInfoAction} from '../../redux/actions_creators/login_action';
import './css/admin.less';


const { Footer, Sider, Content } = Layout;
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
            <Layout className='admin'>
               <Sider className='sider'>Sider</Sider>
               <Layout>
                  <Header>Header</Header>
                  <Content className='content'>Content</Content>
                  <Footer className='footer'>Recommend using chrome browser for better experience</Footer>
               </Layout>
            </Layout>   
         )
       }
    }
}

export default connect(state=>({userInfo:state.userInfo}),
   {
      deleteUserInfo:CreateDeleteUserInfoAction
})(Admin);