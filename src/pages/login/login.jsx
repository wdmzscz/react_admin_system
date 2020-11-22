import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { AmazonOutlined,ChromeOutlined  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './css/login.less';
import logo from './img/logo.png';



export default class Login extends React.Component{

    render(){
      const layout =  {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
      
      const onFinish = (values) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

       return(
          <div className="login">
            <header>
                <img src={logo} alt='logo'/>
                <h1>Product Managment System</h1>
            </header>
            <section>
              <h1>USER LOGIN</h1>
              <Form {...layout}
                name="basic"
                initialValues={{remember: true,}} onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item label="Username" name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input prefix={<AmazonOutlined type='amazon' style={{color:'rgba(0,0,0,.25)'}}/>}/>
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password prefix={<ChromeOutlined type='amazon' style={{color:'rgba(0,0,0,.25)'}}/>} />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </section>
          </div>
       )
    }
}