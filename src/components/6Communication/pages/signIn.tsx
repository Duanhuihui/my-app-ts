import React from 'react'
import { Calendar,Row,Col } from 'antd';
import {Map, Marker} from 'react-bmapgl';
import moment from 'moment';
import './pages.less'

export default class SignIn extends React.Component<any,any>{

    dateCellRender=(date:any)=> {
        return(<div>111</div>)
      }
    render(){
        return<>
        <Row gutter={[16, 32]}>
            <Col span={18}>1</Col>
            <Col span={6}>
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