import React from 'react'
import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import './grid.less'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class EvaluationGrid extends React.Component{
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
            <SubMenu key="sub1" icon={<UserOutlined />} title="问卷调查">
              <Menu.Item key="1">option1</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="留言">
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>222222222222222222222222222</Content>
      </Layout>
    </Content>
  </Layout>
        </>
  
}};

export default EvaluationGrid;