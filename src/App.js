import React, {Component} from 'react'
import 'antd/dist/antd.less';
import {Button} from 'antd'

export default class App extends Component{
    render(){
       return(
          <div className="App">
            <Button type="primary">Button</Button>
          </div>
       )
    }
}

