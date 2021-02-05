import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import './grid.less'
import {Link,Route,Switch} from 'react-router-dom'
import Online from 'components/4Elearn/pages/online'
const { Content, Sider } = Layout;


class ElearningGrid extends React.Component{
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
            <Menu.Item key="sub1" icon={<UserOutlined />} title="在线教学"><Link to='/elearn/online'>在线教学</Link></Menu.Item>
            <Menu.Item key="sub2" icon={<LaptopOutlined />} title="教学录像"><Link to='/elearn/videos'>教学录像</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
          <Route path='/elearn/online' component={Online}></Route>
        </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default ElearningGrid;