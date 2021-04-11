import React from 'react'
import ReactDOM from 'react-dom'
import {Button,Row,Col,Divider } from 'antd'
import {ArrowLeftOutlined,DownloadOutlined,HeartOutlined} from '@ant-design/icons';


class Iframe extends React.Component<any,any> {

    goBack=()=>{
        this.props.history.go(-1)
        console.log(this.props);
        console.log(this.props.location.state.src)
        
    }
    onDownloadFile =()=>{
        var divElement:any = document.getElementById('downloadDiv');
        var downloadUrl= this.props.location.state.src
        var params = JSON.stringify({
            key:'value'
        })
        ReactDOM.render(<form action={downloadUrl} method={'post'}>
            <input type="text" name="params" defaultValue={params}/>
        </form>,divElement);
        // console.log(ReactDOM.findDOMNode(divElement)?.querySelector('form'))
        document.querySelector('#submit')
        // ReactDOM.unmountComponentAtNode(divElement)
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.props.location.state.src)
    }
    render() {
        return (
            <div>
                <div id='downloadDiv'></div>
                <Row gutter={1}>
                    <Col span={1} ><Button type="primary" onClick={this.goBack}><ArrowLeftOutlined twoToneColor="#eb2f96"/></Button></Col>
                    <Col span={1} offset={21} >
                        <Button  type="primary" onClick={this.goBack} icon={<HeartOutlined /> }></Button>
                    </Col>
                    <Col span={1}>
                        <Button  type="primary" onClick={this.onDownloadFile} icon={<DownloadOutlined /> }></Button>
                    </Col>
                </Row>
                <Divider plain>{this.props.location.state.title}</Divider>
                <Row>
                <iframe 
                title={this.props.location.state.title}
                src={this.props.location.state.src}
                style={{ width: "100%",border: 0,height: 1200}}
                />
                </Row>
            </div>
        )
    }
}
export default  (props:any)=><Iframe {...props} key={props.location.pathname} />