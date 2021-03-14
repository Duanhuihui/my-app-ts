import React from 'react'
import { Calendar,Row,Col,Divider,List,Button  } from 'antd';
import {Map, Marker} from 'react-bmapgl';
import './pages.less'

const data = [
    'Racing ',
    'Japanese ',
    'Australian ',
    'Man charged ',
    'Los Angeles',
  ];
export default class SignIn extends React.Component<any,any>{


    render(){
        return<>
        <Row gutter={[16, 32]}>
            <Col span={17}><Divider>课堂签到排行榜</Divider>
            <Row><Col span={20} offset={2}><List
                  itemLayout='vertical'
                  dataSource={data}
                  renderItem={item => <List.Item>{item}<div>content</div>
                  </List.Item>}></List>
                  <div style={{marginTop:'27px'}}><Button type="primary" block>签到</Button></div>
                  </Col>
            <Col span={2}></Col></Row>
            </Col>
            <Col span={7}>
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} />
            </div>
        </Col>
        </Row>
        <Row gutter={[16, 32]}>
            <Col span={24}>
            <Map 
                center={{lng: 121.30688, lat: 31.187873}} 
                zoom="12"
                enableScrollWheelZoom
                 >
                     <Marker position={{lng: 121.30688, lat: 31.187873}} ></Marker>
            </Map></Col>
        </Row>
            
    </>}
    
}