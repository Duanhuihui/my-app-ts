import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link,Switch,Route} from 'react-router-dom'
import Line from 'components/3Practice/pages/line'
import LineDetail from 'components/3Practice/pages/lineDetail'
import Summit from 'components/3Practice/pages/summit'
import './grid.less'

const { Content, Sider } = Layout;

class PracticeGrid extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.state={
      banner:[]
    }
  }
    render(){
      const {history} = this.props
        return <>
        <Layout>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["practi/outlin"]}
            selectedKeys={[history.location.pathname.substring(1,14)]}
            style={{ height: '100%' }}
            onClick={()=>{console.log(history.location.pathname.substring(1,14))}}
          >
            <Menu.Item key="practi/outlin" icon={<UserOutlined />} title="实验大纲"><Link to='/practi/outlin'>实验大纲</Link></Menu.Item>
            <Menu.Item key="practi/outlin" icon={<LaptopOutlined />} title="实验指导书"><Link to='/practi/outlin'>实验指导书</Link></Menu.Item>
            <Menu.Item key="practi/outlin" icon={<NotificationOutlined />} title="实验报告模板"><Link to='/practi/outlin'>实验报告模板</Link></Menu.Item>
            <Menu.Item key="practi/summit" icon={<NotificationOutlined />} title="实验提交系统"><Link to='/practi/summit'>实验提交系统</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path='/practi/outlin' component={Line}></Route>
            <Route path='/practi/linede' component={LineDetail}></Route>
            <Route path='/practi/summit' component={Summit}></Route>
          </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default PracticeGrid;