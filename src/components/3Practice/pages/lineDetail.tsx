import React, { Component } from 'react'
import {Button,Row,Col,Divider } from 'antd'
import './pages.less'
import {ArrowLeftOutlined,DownloadOutlined,HeartOutlined} from '@ant-design/icons';


export default  class LineDetail extends Component {
    goBack=()=>{
        // this.props.history.go(-1)
        // const{history} = this.props
        console.log(this.props);
        
    }
    render() {
        return (
            <div>
                <Row gutter={1}>
                    <Col span={1} ><Button type="primary" onClick={this.goBack}><ArrowLeftOutlined twoToneColor="#eb2f96"/></Button></Col>
                    <Col span={1} offset={21} >
                        <Button  type="primary" onClick={this.goBack} icon={<HeartOutlined /> }></Button>
                    </Col>
                    <Col span={1}>
                        <Button  type="primary" onClick={this.goBack} icon={<DownloadOutlined /> }></Button>
                    </Col>
                </Row>
                <Divider plain>Racing car sprays burning fuel into crowd.</Divider>
                <Row>
                细节部分
                </Row>
                
                
            </div>
        )
    }
}