import React from 'react'
import { Table,Divider,Typography } from 'antd';


const { Text } = Typography;


interface INoticeProps{
  dataSource:any,
  columns:any
}

export default class Notice extends React.Component<INoticeProps,any>{
  onLoadNotice=()=>{
    const {dataSource}=this.props
    console.log(dataSource)
  }

    render(){
      const {dataSource,columns}=this.props
        return <div><Divider orientation="left"><Text type="warning">课程通知</Text></Divider>
        <Table 
        dataSource={dataSource} 
        columns={columns} 
        pagination={false}
        bordered={true}>
        </Table>
        <Divider orientation="left"><Text type="warning">在线交流研讨安排</Text></Divider>
        <Table 
        dataSource={dataSource} 
        columns={columns} 
        pagination={false}
        bordered={true}>
        </Table>
        <Divider orientation="left"><Text type="warning">线下答疑安排</Text></Divider>
        <Table 
        dataSource={dataSource} 
        columns={columns} 
        pagination={false}
        bordered={true}>
        </Table>
        </div>
    }
}