
import React from 'react'
import { Layout, Menu} from 'antd';
import './grid.less'
import api from 'api/index'
//import { Router, Route} from 'react-router'
import {BrowserRouter,  Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { routes } from 'router';




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
        return  <BrowserRouter><Layout>
    <Header className="header">
      <div className="logo"><span className="logoContent">C语言</span></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">课程概况</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/2">教学资源</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/3">实践教学</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/4">线上教学</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/5">作业考试</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/6">交流互动</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/7">效果评价</Link></Menu.Item>
      </Menu>
    </Header>
    {/* <Route exact path='/1' component={CourseGrid}></Route>
    <Route path='/2' component={ResourceGrid}></Route>
    <Route path='/3' component={PracticeGrid}></Route>
    <Route path='/4' component={ElearningGrid}></Route>
    <Route path='/5' component={ExercisesGrid}></Route>
    <Route path='/6' component={CommunicationGrid}></Route>
    <Route path='/7' component={EvaluationGrid}></Route> */}
        {renderRoutes(routes)}
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </BrowserRouter>
}};

export default MainGrid;