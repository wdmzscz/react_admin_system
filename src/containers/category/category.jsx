import React, {Component} from 'react'
import { Card, Button, message, Table } from 'antd';
import {reqCategoryList} from '../../api';
import {PAGE_SIZE} from '../../config';

export default class Category extends Component{

   state={
      Category:[]
   }

   getCategoryList= async ()=>{
      let result = await reqCategoryList();
      let {status, msg, data } = result;
               console.log('data',result)
      if(status === 200){
         this.setState({Category:data.data});

      }else{
         message.error(msg,1);
      }
   }

   componentDidMount(){
      this.getCategoryList();
   }

    render(){

       const dataSource = this.state.Category;

         const columns = [
            {
               title: 'Category',
               dataIndex: 'name',
               key: 'name',
            },
            {
               title: 'Action',
               dataIndex: 'age',
               key: 'age',
               render:()=>{return(<Button type='primary'>Click</Button>)},
               width:'25%',
               align:'center'
            }
         ];
         return(
            <Card title="Default size card" extra={<Button type = 'primary'>Add</Button>} >
               <Table 
                  dataSource={dataSource} 
                  columns={columns} 
                  bordered 
                  rowKey='_id'
                  pagination={{pageSize:PAGE_SIZE}}
               />
            </Card>
         )
    }
}