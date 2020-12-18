import React, {Component} from 'react';
import { Menu } from 'antd';
import logo from '../../../img/logo.png';
import '../nav/nav_left.less';
import {Link, withRouter} from 'react-router-dom'
import { AppstoreOutlined, HomeOutlined,UnorderedListOutlined
,ToolOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

@withRouter
class Nav_left extends Component{
    handleClick = e => {
        console.log('click ', e);
      }; 
    
    render() {

    let {location} = this.props;
    return (
        <div>
            <header className='nav_header'>
                <img src={logo}/>
                <h1>MANAGEMENT SYSTEM</h1>  
            </header>
            <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={location.pathname.split('/').reverse()[0]}
            defaultOpenKeys={location.pathname.split('/').slice(2)}
            mode="inline"
            theme="dark"
            >
            <Menu.Item key="home">
                <Link to='/admin/home'>
                <HomeOutlined />
                <span>Home</span>
                </Link>
            </Menu.Item>

            <SubMenu key="prod_about" icon={<AppstoreOutlined />} title="Product Category">               
                <Menu.Item key="category">
                    <Link to='/admin/prod/category'>
                        <UnorderedListOutlined />Category Management
                    </Link>
                </Menu.Item>
                <Menu.Item key="product">
                    <Link to='/admin/prod/product'>
                        <ToolOutlined />Product Management
                    </Link>
                </Menu.Item>
            </SubMenu>
            </Menu>
        </div>
    );
    }
}

export default Nav_left;