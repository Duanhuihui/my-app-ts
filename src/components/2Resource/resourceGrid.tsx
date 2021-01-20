import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Outline from 'components/2Resource/pages/outline'
import Plan from 'components/2Resource/pages/plan'
import Lesson from 'components/2Resource/pages/lesson'
import Media from 'components/2Resource/pages/media'
import './grid.less'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class ResourceGrid extends React.Component{
  state={
    subPage:'a'
  }
    //页面切换
    changePage= (e:any) =>{
      this.setState({
        subPage:e.key
      })
      console.log(e.key);
      
    }
  switchPage=(subPage:any)=>{
    switch(subPage){
      case 'a': return <Outline></Outline>
      case 'b':return <Plan></Plan>
      case 'c':return <Lesson></Lesson>
      case 'd':return <Media></Media>
      case 'f':case 'g':case 'h':return null
      case 'i':return null
      default:return null
    }
  }

    render(){
      const {subPage} = this.state;
        return <>
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider className="site-layout-background" width={200}>
                <Menu
                  onClick={this.changePage}
                  mode="inline"
                  defaultSelectedKeys={['a']}
                  style={{ height: '100%' }}
                >
                    <Menu.Item key="a" icon={<UserOutlined />} title="教学大纲" >教学大纲</Menu.Item>
                    <Menu.Item key="b" icon={<LaptopOutlined />} title="授课计划" >授课计划</Menu.Item>
                    <Menu.Item key="c" icon={<NotificationOutlined />} title="课程教案" >课程教案</Menu.Item>
                    <Menu.Item key="d" icon={<UserOutlined />} title="多媒体课件" >多媒体课件</Menu.Item>
                  <SubMenu key="e" icon={<NotificationOutlined />} title="参考资料">
                    <Menu.Item key="f">书籍</Menu.Item>
                    <Menu.Item key="g">国家等级考试</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {this.switchPage(subPage)}
              </Content>
            </Layout>
          </Content>
        </Layout>
        </>
  
}};

export default ResourceGrid;