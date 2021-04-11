import { Row,Divider,Typography,List ,Space,Col,Image,  Button} from 'antd';
import {Link} from 'react-router-dom'
import { Component } from 'react'
import {getAllInfo} from 'apis/index'
import {fileUrl} from 'config'
import {proxyUrl} from 'config'
//admin
import CourseForm  from 'container/courseForm'

const { Text } = Typography;
interface InformationState{
  list:{id:number,href:String,title:String,avatar:String,description:String,content:String,teacher:string}[],
  deleteSuccess:boolean
  showNewForm:boolean
}

export default class Information extends Component<any,InformationState>{
  state={
    list:[{id:0,href:"",title:"",avatar:"",description:"",content:"",teacher:''}],
    deleteSuccess:false,
    showNewForm:false
  }
  getAllInfo=()=>{
    getAllInfo().then((result)=>{
      this.setState({
        list:result,
        showNewForm:false
      })
    })
  }
  onShowNewForm = ()=>{
    this.setState({
      showNewForm:true
    }) 
  }
  onShowNewButton = ()=>{
    return <Row>
      <Col offset = {20} span={4} ><Button onClick={this.onShowNewForm} type='primary'>新增课程</Button></Col>
    </Row>
  }
  onRewrite=(itemId:number)=>{
    console.log(itemId)
  }


  componentDidMount(){
    this.getAllInfo()
    console.log(this.props)
  }
  // 加载数据并渲染组件
  onLoadDate=()=>{
    const {list,showNewForm} = this.state
    return <>
    {!showNewForm && this.onShowNewButton()}
    <Divider></Divider>
   {!showNewForm && <List
    itemLayout="vertical"
    size="large"
    split={true}
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={list}
    renderItem={item => (
      <Row gutter={[16,16]}>
        <Col span={3}>
          <Image
          alt="测试"
          height={"100px"}
          width={"100px"}
          src={fileUrl+item.avatar}
           ></Image>
        </Col>
        <Col span={21}>
        <List.Item key={item.id} 
        extra={
          <Row gutter={[16, 16]}>
          <Col span={8}><Button size="small" type="primary" onClick={()=>this.onRewrite(item.id)}>修改</Button></Col>
          <Col span={8}><Button size="small">收藏</Button></Col>
          <Col span={8}><Button size="small" danger>删除</Button></Col>
        </Row>
        }>
        <List.Item.Meta title={<Link to={{pathname:'/course/iframe',state:{src:proxyUrl+fileUrl+item.href,title:item.title}}}>课程名：<Space size={25}>{item.title}<Text type="secondary">{item.teacher}</Text></Space></Link>}/>
        概要：{item.content}
      </List.Item>
        </Col>
      </Row>
    )}
  />}
    

    </>
  }
    render(){
      const {showNewForm} = this.state
      const {location} = this.props
        return <div>
          {showNewForm &&<CourseForm updateList={this.getAllInfo } pathname={location.pathname}/>}
          {this.onLoadDate()}
        </div>
    }
}
