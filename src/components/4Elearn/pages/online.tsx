import { Component } from 'react'
import { Row,Col,Divider,Comment,Avatar,Tooltip,Button} from 'antd';
import ReactPlayer from 'react-player'
import moment from 'moment';
import {ArrowLeftOutlined,DownloadOutlined,HeartOutlined} from '@ant-design/icons';

export default class Online  extends Component<any,any> {
    goBack=()=>{
        this.props.history.go(-1)
        console.log(this.props);
        
    }
    render() {
        return <div>
                <Row gutter={1}>
                    <Col span={1} ><Button type="primary" onClick={this.goBack}><ArrowLeftOutlined twoToneColor="#eb2f96"/></Button></Col>
                    <Col span={1} offset={21} >
                        <Button  type="primary" onClick={this.goBack} icon={<HeartOutlined /> }></Button>
                    </Col>
                    <Col span={1}>
                        <Button  type="primary" onClick={this.goBack} icon={<DownloadOutlined /> }></Button>
                    </Col>
                </Row>
            <Divider  orientation="left">直播间</Divider>
                <ReactPlayer
                    className='react-player'
                    url='....flv'
                    width='100%'
                    height='100%'
                    playing={false}
                    controls
                />
            <Row gutter={24}>
                <Col span={18}>评论列表
                <Comment
                    author={"Han Solo"}
                    avatar={ <Avatar  alt="Han Solo" /> }
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                    />
                </Col>
                <Col span={6}>成员列表</Col>
            </Row>
            </div>
        
    }
}
