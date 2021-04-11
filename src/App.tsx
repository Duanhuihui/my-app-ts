import './App.less';
import React from 'react'
import { Layout, Menu,Image} from 'antd';
import api from 'api/index'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import { withRouter} from "react-router-dom"
// import { renderRoutes } from 'react-router-config';
// import { routes } from 'router';
import austlogo from 'images/austlogo.png'

import CourseGrid from 'components/1Course/courseGrid'
import ResourceGrid from 'components/2Resource/resourceGrid'
import PracticeGrid from 'components/3Practice/practiceGrid'
import ElearningGrid from 'components/4Elearn/elearningGrid'
import ExercisesGrid from 'components/5Exercises/exercisesGrid'
import CommunicationGrid from 'components/6Communication/communicationGrid'
import EvaluationGrid from 'components/7Evaluation/evaluationGrid'

const { Header,  Footer } = Layout;
class App extends React.Component<any,any>{

  constructor(props:any){
    super(props);
    this.state={
      banner:[]
    }
  }
  componentDidMount(){}


    
    render(){
        return <Layout>
                <Header className="header">
                  <div className="logo"><Image className='logoContent' src={austlogo}></Image></div>
                  <Menu theme="dark" mode="horizontal" selectedKeys={[this.props.history.location.pathname.substring(1,7)]} onClick={()=>{console.log(this.props.history.location.pathname.substring(1,7))}}>
                    <Menu.Item key="course"><NavLink to="/course">课程概况</NavLink></Menu.Item>
                    <Menu.Item key="resour"><NavLink to="/resour">教学资源</NavLink></Menu.Item>
                    <Menu.Item key="practi"><NavLink to="/practi">实践教学</NavLink></Menu.Item>
                    <Menu.Item key="elearn"><NavLink to="/elearn">线上教学</NavLink></Menu.Item>
                    <Menu.Item key="exerci"><NavLink to="/exerci">作业考试</NavLink></Menu.Item>
                    <Menu.Item key="commun"><NavLink to="/commun">交流互动</NavLink></Menu.Item>
                    <Menu.Item key="evalut"><NavLink to="/evalut">效果评价</NavLink></Menu.Item>

                  </Menu>
                </Header>
                    <Switch>
                      <Route path="/course" component={CourseGrid}/>
                      <Route path="/resour" component={ResourceGrid}/>
                      <Route path="/practi" component={PracticeGrid}/>
                      <Route path="/elearn" component={ElearningGrid}/>
                      <Route path="/exerci" component={ExercisesGrid}/>
                      <Route path="/commun" component={CommunicationGrid}/>
                      <Route path="/evalut" component={EvaluationGrid}/>
                      <Redirect from='/' to='/course' />
                    </Switch>
                <Footer style={{ textAlign: 'center' }}>安徽省 淮南市 泰丰大街168号</Footer>
              </Layout>
}
}


export default withRouter(App);
