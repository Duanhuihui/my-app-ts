import { Component } from 'react'
import { List } from 'antd';
import {Link} from 'react-router-dom'

export default class Line  extends Component {
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
                renderItem={item => <List.Item><Link to='/practi/linedetail'>{item}</Link></List.Item>}
                />
            </div>
        )
    }
}
