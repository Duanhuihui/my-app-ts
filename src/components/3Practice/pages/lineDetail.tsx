import React from 'react'
import {Button,Row,Col,Divider } from 'antd'
import './pages.less'
import {ArrowLeftOutlined,DownloadOutlined,HeartOutlined} from '@ant-design/icons';



class LineDetail extends React.Component<any,any> {

    goBack=()=>{
        this.props.history.go(-1)
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
                <iframe 
                title="This is a unique title" 
                src="http://localhost:3000/file/estore.docx"
            // src="C:\\Users\\Lenovo\\Desktop\\react-demo\\my-app-ts\\src\\file\\estore.docx"
                style={{ width: "100%",border: 0,height: 1200}}
                />
                </Row>
            </div>
        )
    }
}

export default  (props:any)=><LineDetail {...props} key={props.location.pathname} />