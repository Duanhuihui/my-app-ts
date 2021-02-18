import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link,Route,Switch} from 'react-router-dom'
import ExerciseList from 'components/5Exercises/pages/exerciseList'
import './grid.less'

const { Content, Sider } = Layout;

class ExercisesGrid extends React.Component{
  constructor(props:any){
    super(props)
    this.state={
      banner:[]
    }
  }
    render(){
      //const  { banner } = this.state
        return <>
        <Layout>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="sub1" icon={<UserOutlined />} title="课后习题"><Link to='/exerci/exelst'>课后习题</Link> 
            </Menu.Item>
            <Menu.Item key="sub2" icon={<LaptopOutlined />} title="复习试卷及参考答案">复习试卷及参考答案
            </Menu.Item>
            <Menu.Item key="sub3" icon={<NotificationOutlined />} title="作业提交系统">作业提交系统
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path='/exerci/exelst' component={ExerciseList}></Route>
          </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default ExercisesGrid;