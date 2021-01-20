import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Information from 'components/1Course/pages/information'
import Notice from 'components/1Course/pages/notice'
import Contact from 'components/1Course/pages/contact '
import Learn from 'components/1Course/pages/learn'
import './grid.less'
import {informations,noticeData,columns} from 'data/db'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

interface courseGridState{
  subPage:string
}

interface courseGridProps{

}

class courseGrid extends React.Component<courseGridProps,courseGridState>{
  state={
    route:'',
    subPage:'a',
    informationsS:informations
  }
  //页面切换
  private changePage= (e:any) =>{
    this.setState({
      subPage:e.key
    })
  }
  //锚点跳转
  scrollToAnchor = (anchorName:string) => {
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }
  switchPage=(subPage:any)=>{
    const {informationsS} =this.state
    switch(subPage){
      case 'a':return <Information informations={informationsS}/>
      case 'b':case 'c':case 'd':return <Notice dataSource={noticeData} columns={columns}></Notice>
      case 'f':case 'g':case 'h':return <Contact></Contact>
      case 'i':return <Learn/>
      default:return <Information informations={informationsS}></Information>
    }
  }
    render(){
      const subPage = this.state.subPage;
        return <Layout>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            onClick={this.changePage}
            mode="inline"
            defaultSelectedKeys={['a']}
            defaultOpenKeys={['a']}
            style={{ height: '100%' }}
            
          >
            <Menu.Item  key="a" icon={<UserOutlined />} title="课程介绍" >
              课程介绍
              </Menu.Item>
            <SubMenu key="b1" icon={<LaptopOutlined />} title="课程公告">
              <Menu.Item key="b"> 课程通知
              </Menu.Item>
              <Menu.Item key="c">在线交流研讨安排</Menu.Item>
              <Menu.Item key="d">线下答疑安排</Menu.Item>
            </SubMenu>
            <SubMenu key="e1" icon={<NotificationOutlined />} title="联系我们">
              <Menu.Item key="f">师资队伍</Menu.Item>
              <Menu.Item key="g">成果展示</Menu.Item>
              <Menu.Item key="h">联系方式</Menu.Item>
            </SubMenu>
            <Menu.Item key="i" icon={<NotificationOutlined />} title="项目研究">项目研究</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        
        { this.switchPage(subPage) }
          
        </Content>
      </Layout>
    </Content>
  </Layout>
  
}};

export default courseGrid;