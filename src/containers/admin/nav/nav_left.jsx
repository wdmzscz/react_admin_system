import React, {Component} from 'react';
import { Menu } from 'antd';
import {connect} from 'react-redux';
import {createSaveTitleAction} from '../../../redux/actions_creators/menu_action.js';
import logo from '../../../img/logo.png';
import MenuList from '../../../config/menuConfig';
import '../nav/nav_left.less';
import {Link, withRouter} from 'react-router-dom'
import { AppstoreOutlined, HomeOutlined
 } from '@ant-design/icons';

const { SubMenu } = Menu;

@connect(
    state=>({}),
    {
        saveTitle:createSaveTitleAction
    }
)
@withRouter
class NavLeft extends Component{
    handleClick = e => {
        console.log('click ', e);
      }; 

    createMenu = (obj)=>{
        return obj.map((item)=>{
            if(!item.children){
                return (
                    <Menu.Item key={item.key} onClick={()=>{this.props.saveTitle(item.title)}}>
                        <Link to={item.path}>
                        <HomeOutlined />
                        <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
               return( <SubMenu key={item.key} icon={<AppstoreOutlined />} title={item.title}>                
                {this.createMenu(item.children)}
                </SubMenu>)
            }
        })
    }
    
    render() {

    let {location} = this.props;
    console.log('list',MenuList)
    return (
        <div>
            <header className='nav_header'>
                <img src={logo} alt='nono'/>
                <h1>MANAGEMENT SYSTEM</h1>  
            </header>
            <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={location.pathname.split('/').reverse()[0]}
            defaultOpenKeys={location.pathname.split('/').slice(2)}
            mode="inline"
            theme="dark"
            >
            {this.createMenu(MenuList)}
            </Menu>
        </div>
    );
    }
}

export default NavLeft;