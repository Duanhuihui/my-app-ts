import React,{Component} from 'react'
import { List} from 'antd';
import {learnItems} from 'data/db'

export default class Learn extends Component{
    

   

    render(){
        return <>
          <List itemLayout="vertical" size="large"
            pagination={{onChange: page => { console.log(page)},pageSize: 3,}}
            dataSource={learnItems}
            
            renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
            )}
          />
        </>
    }
}