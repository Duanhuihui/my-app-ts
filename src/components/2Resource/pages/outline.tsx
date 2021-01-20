import { List} from 'antd';
import {
  HeartOutlined,
  DownloadOutlined,
  EyeOutlined
} from '@ant-design/icons';
import React from 'react'


export default class Outline extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };
   data = [
    {
      title: '教学大纲 1',
    },
    {
      title: '教学大纲 2',
    },
    {
      title: '教学大纲e 3',
    },
    {
      title: '教学大纲 4',
    },
  ];
  
  render(){
      return<>
        <List
    itemLayout="vertical"
    dataSource={this.data}
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    renderItem={item => (
      <List.Item actions={[
        <a key="list-loadmore-edit" href='http://www.baidu.com'><EyeOutlined /> 查看</a>, 
        <a key="list-loadmore-more" href='http://www.baidu.com'><DownloadOutlined /> 下载</a>,
        <a key="list-loadmore-more" href='http://www.baidu.com'><HeartOutlined /> 收藏</a>
      ]}
      >
        <List.Item.Meta
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
        C语言是一门面向过程的、抽象化的通用程序设计语言，广泛应用于底层开发。C语言能以简易的方式编译、处理低级存储器。C语言是仅产生少量的机器语言以及不需要任何运行环境支持便能运行的高效率程序设计语言。尽管C语言提供了许多低级处理的功能，但仍然保持着跨平台的特性，以一个标准规格写出的C语言程序可在包括类似嵌入式处理器以及超级计算机等作业平台的许多计算机平台上进行编译。
      </List.Item>
    )}
  />
      </> 
    }
}
