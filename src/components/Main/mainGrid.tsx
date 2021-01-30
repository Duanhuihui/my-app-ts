
import React from 'react'
import { Layout, Menu,Image} from 'antd';
import './grid.less'
import api from 'api/index'
//import { Router, Route} from 'react-router'
import {Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { routes } from 'router';
import austlogo from 'images/austlogo.png'




const { Header,  Footer } = Layout;

class MainGrid extends React.Component{
  constructor(props:any){
    super(props);
    this.state={
      banner:[]
    }
  }
  componentDidMount(){
    api.getChengpin()
    .then(resp =>{
      return resp.json();
    })
    .then(data=>{
      console.log('-----------------------------------');
      console.log(data);
      console.log(routes);
      
      
    })

  }
    render(){
        return  <Layout>
    <Header className="header">
      <div className="logo"><Image className='logoContent' src={austlogo}></Image></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/1">课程概况</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/2">教学资源</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/3">实践教学</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/4">线上教学</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/5">作业考试</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/6">交流互动</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/7">效果评价</Link></Menu.Item>
      </Menu>
    </Header>
        {renderRoutes(routes)}
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
}};

export default MainGrid;