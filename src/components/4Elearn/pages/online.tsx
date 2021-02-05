import { Component } from 'react'
import { Row,Col,Divider,Comment,Avatar,Tooltip} from 'antd';
import ReactPlayer from 'react-player'
import moment from 'moment';

export default class Online  extends Component {
    
    render() {
        return <div>
            <Divider  orientation="left">直播列表</Divider>
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
