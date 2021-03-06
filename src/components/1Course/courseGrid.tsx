import React from 'react'
import { Layout, Menu} from 'antd';
import {Link,Switch,Route} from 'react-router-dom'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Information from 'components/1Course/pages/information'
import Notice from 'components/1Course/pages/notice'
import Contact from 'components/1Course/pages/contact '
import Learn from 'components/1Course/pages/learn'
import Iframe from 'container/iframe'
import './grid.less'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
interface courseGridState{
  dd:{q:String}
}



class courseGrid extends React.Component<courseGridState,any>{

  componentDidMount(){
  }
    render(){
        return <Layout>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/course/info']}
            defaultOpenKeys={['/course/info']}
            style={{ height: '100%' }}
            
          >
            <Menu.Item  key="/course/info" icon={<UserOutlined />} title="课程介绍"><Link to='/course/info'>课程介绍</Link></Menu.Item>
            <SubMenu key="b1" icon={<LaptopOutlined />} title="课程公告">
              <Menu.Item key="b"><Link to='/course/notice'>课程通知</Link></Menu.Item>
              <Menu.Item key="c"><Link to='/course/notice'>在线交流研讨安排</Link></Menu.Item>
              <Menu.Item key="d"><Link to='/course/notice'>线下答疑安排</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="e1" icon={<NotificationOutlined />} title="联系我们">
              <Menu.Item key="f"><Link to='/course/contact'>师资队伍</Link></Menu.Item>
              <Menu.Item key="g"><Link to='/course/contact'>成果展示</Link></Menu.Item>
              <Menu.Item key="h"><Link to='/course/contact'>联系方式</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="i" icon={<NotificationOutlined />} title="项目研究"><Link to='/course/learn'>项目研究</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
          <Route key={'1'}  path='/course/info' component={Information}></Route>
          <Route key={'2'}  path='/course/notice' component={Notice}></Route>
          <Route key={'3'}  path='/course/contact' component={Contact}></Route>
          <Route key={'4'} path='/course/learn' component={Learn}></Route>
          <Route key={'5'} path='/course/iframe' component={Iframe}></Route>
        </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
  
}};

export default courseGrid;