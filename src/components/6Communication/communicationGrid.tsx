import React from 'react'
import { Layout, Menu} from 'antd';
import {Route,Switch,Link} from 'react-router-dom'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './grid.less'
import SignIn from 'components/6Communication/pages/signIn'

const { Content, Sider } = Layout;

class CommunicationGrid extends React.Component{
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
            <Menu.Item key="1" icon={<UserOutlined />}><Link to='/commun/signin'></Link>课堂签到系统</Menu.Item>
            <Menu.Item key="sub2" icon={<LaptopOutlined />} title="在线交流研讨">在线交流研讨</Menu.Item>
            <Menu.Item key="sub3" icon={<NotificationOutlined />} title="答疑交流研讨">答疑交流研讨</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path='/commun/signin' component={SignIn}></Route>
          </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default CommunicationGrid;