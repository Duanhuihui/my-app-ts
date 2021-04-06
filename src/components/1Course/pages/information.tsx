import { Row,Divider,Typography,List ,Space,Tag,Col,Image, Result} from 'antd';
import { Component } from 'react'
import {informations} from 'data/db'
import {getAllInfo} from 'apis/index'
import {fileUrl} from 'config'

//admin
import CourseForm  from 'components/admin/courseForm'

const { Title, Paragraph, Link,Text } = Typography;
interface InformationState{
  list:{id:number,href:String,title:String,avatar:String,description:String,content:String,teacher:string}[],
  deleteSuccess:boolean
}

export default class Information extends Component<any,InformationState>{
  state={
    list:[{id:0,href:"",title:"String",avatar:"String",description:"String",content:"String",teacher:''}],
    deleteSuccess:false
  }
  getAllInfo=()=>{
    getAllInfo().then((result)=>{
      this.setState({
        list:result
      })
    })
  }


  componentDidMount(){
    this.getAllInfo()
  }
  // 加载数据并渲染组件
  onLoadDate=()=>{
    const {list} = this.state
    return <>
    <CourseForm updateList={this.getAllInfo }/>
   <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
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
        <List.Item key={item.id}>
        <List.Item.Meta title={<a href={fileUrl+item.href}>课程名：<Space size={25}>{item.title}<Text type="secondary">{item.teacher}</Text></Space></a>}/>
        概要：{item.content}
      </List.Item>
        </Col>
      </Row>
    )}
  />
    

    </>
  }
  
     loadInformations=()=>{ 
      return informations.map((element)=>{
              return <div key={element.key}><Divider orientation="left">{element.title}</Divider>
              <Row>
                <Title level={3}>{element.title}</Title>
                
                <Paragraph>
                <Link><Title level={5}>{element.author}</Title></Link>
                  {element.content}
                </Paragraph>
              </Row></div>
      })
      }
    render(){
        return <div>
          {this.onLoadDate()}
        </div>
    }
}
