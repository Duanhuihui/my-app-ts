import React,{Component} from 'react'
import { Row,Col,Divider,Image,Typography, Space} from 'antd';
import ImageJ from "images/j.png";
import './pages.less'

const { Text } = Typography;

export default class Book extends Component{
    state={
        bookList:[{}],
        isShowBookDetail:false
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
    //鼠标进入书籍封面展示详细信息 onMouseEnter / 
    showBookDetail=()=>{
        this.setState({
            isShowBookDetail:true
        } )
        
    }
    //鼠标进入书籍封面隐藏详细信息 onMouseLeave
    hideBookDeatil=()=>{
        this.setState({
            isShowBookDetail:false
        } )
        
    }

    render(){
        return <>
        
        <Divider orientation="left">书籍</Divider>
              <Row gutter={[16, 16]}> 
               <Col span={3} className='bookImage'onMouseEnter={this.showBookDetail} onMouseLeave={this.hideBookDeatil}>
                   <Image src={ImageJ} ></Image>
                   {this.state.isShowBookDetail&&
                   <div className='bookDetail'>
                       <Space direction="vertical" size={[0, 0]}>
                            <Text strong> 三重门 </Text>
                            <Text> 韩寒 </Text>
                            <Text> 月黑风高三重门，唯我独存是谁争是非 </Text>
                       </Space></div>
                    }
               </Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
               <Col span={3}><Image src={ImageJ}></Image></Col>
              </Row>
        <Divider orientation="left">国家等级考试</Divider>
                <Row> 
                <Col span={4}>col</Col>
                </Row>
        </>
    }
}