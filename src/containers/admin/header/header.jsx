import React, {Component} from 'react';
import '../css/header.less';
import {FullscreenOutlined} from '@ant-design/icons';
import {Button} from 'antd';

export default class Header extends Component{
    render(){
       return(
         <header className='header'>
            <div className='header-top'>
               <Button size='small'><FullscreenOutlined /></Button>
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
               <img src='https://weather-ydn-yql.media.yahoo.com/forecastrss' alt='weather'/>
            </div>
         </header>
       )
    }
}