import { Component } from 'react'
import { List,Tag ,Button } from 'antd';
import {Link} from 'react-router-dom'
import {DownloadOutlined,HeartOutlined} from '@ant-design/icons';

export default class Videos  extends Component {
     data=[
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
     ]
    render() {
        return (
            <div>
                <List
                size="large"
                bordered
                pagination={{onChange: page => {
                    console.log(page);
                  },pageSize: 10}}
                dataSource={this.data}
                renderItem={item => 
                <List.Item actions={[<Button key="list-loadmore-edit" size={"small"} icon={<HeartOutlined/>}>收藏</Button>, <Button key="list-loadmore-more" size={"small"} icon={<DownloadOutlined/>}>下载</Button>]}>
                    <Link to='/elearn/online'><Tag color="#6495ED">VIDEO</Tag>{item}</Link>
                    
                </List.Item>}
                />
            </div>
        )
    }
}
