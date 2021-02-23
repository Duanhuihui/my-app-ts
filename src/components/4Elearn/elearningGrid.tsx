import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import './grid.less'
import {Link,Route,Switch} from 'react-router-dom'
import Online from 'components/4Elearn/pages/online'
import OnlineList from 'components/4Elearn/pages/onlineList'
import Videos from 'components/4Elearn/pages/videos'
const { Content, Sider } = Layout;


class ElearningGrid extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.state={
      banner:[]
    }
  }
  choseMenu=(menu:string)=>{
    if(menu.length > 6){
      return [menu]
    }else{
      return [menu+'/onlnli']
    }
  }
    render(){
      const {history} = this.props
      let choseMenu = this.choseMenu(history.location.pathname.substring(1,14))
        return <>
        <Layout>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            selectedKeys={choseMenu}
            style={{ height: '100%' }}
          >
            <Menu.Item key="elearn/onlnli" icon={<UserOutlined />} title="在线教学"><Link to='/elearn/onlnli'>在线教学</Link></Menu.Item>
            <Menu.Item key="elearn/videos" icon={<LaptopOutlined />} title="教学录像"><Link to='/elearn/videos'>教学录像</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
          <Route path='/elearn/online' component={Online}></Route>
          <Route path='/elearn/onlnli' component={OnlineList}></Route>
          <Route path='/elearn/videos' component={Videos}></Route>
        </Switch>
        </Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default ElearningGrid;