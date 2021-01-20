import React,{Component} from 'react'
import { Row,Col,Divider} from 'antd';

export default class Book extends Component{
    state={
        bookList:[{}]
    }
    onLoadBook=()=>{
        const {bookList} = this.state
        for(var i=1;i < 9;i++){
            bookList.push(<Col span={3}>{i}</Col>)  
        }
        this.setState({
            bookList:bookList
        })
    }

    render(){
        return <>
        
        <Divider orientation="left">书籍</Divider>
              <Row> 
               
              </Row>
        <Divider orientation="left">国家等级考试</Divider>
                <Row> 
                <Col span={4}>col</Col>
                </Row>
        </>
    }
}