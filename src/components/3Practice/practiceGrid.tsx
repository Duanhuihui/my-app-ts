import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link,Switch,Route} from 'react-router-dom'
import Line from 'components/3Practice/pages/line'
import LineDetail from 'components/3Practice/pages/lineDetail'
import './grid.less'

const { Content, Sider } = Layout;

class PracticeGrid extends React.Component{
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
            defaultSelectedKeys={['sub2']}
            defaultOpenKeys={['sub2']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="sub1" icon={<UserOutlined />} title="实验大纲"><Link to='/3/a'>实验大纲</Link></Menu.Item>
            <Menu.Item key="sub2" icon={<LaptopOutlined />} title="实验指导书">实验指导书</Menu.Item>
            <Menu.Item key="sub3" icon={<NotificationOutlined />} title="实验报告模板">实验报告模板</Menu.Item>
            <Menu.Item key="sub4" icon={<NotificationOutlined />} title="实验提交系统">实验提交系统</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route  path='/3/a' component={Line}></Route>
            <Route exact={true} path='/3/d' component={LineDetail}></Route>
          </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default PracticeGrid;