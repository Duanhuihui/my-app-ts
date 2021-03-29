import { Row,Divider,Typography,List ,Space} from 'antd';
import React,{ Component } from 'react'
import {informations,noticeData,columns} from 'data/db'
import {getInfo,getInfoById} from 'apis/index'

//admin
import CourseForm  from 'components/admin/courseForm'

const { Title, Paragraph, Link,Text } = Typography;
interface InformationState{
  list:{href:String,title:String,avatar:String,description:String,content:String}[]
}

export default class Information extends Component<any,InformationState>{
  state={
    list:[{href:"",title:"String",avatar:"String",description:"String",content:"String"}]
  }


  componentDidMount(){
    console.log('匹配开始！！')
    getInfo().then((result)=>{
      this.setState({
        list:result
      })
    })
    console.log('post')
    getInfoById("1","Post请求").then(result=>{
      console.log("result",result)
    })
  }
  // listData = this.state.list
  loadDate=()=>{
    const {list} = this.state
    return <>
    <CourseForm/>
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
          title={<a href={item.href}><Space size={25}>{item.title}<Text type="secondary">item.teacher_id</Text></Space></a>}
        />
        {item.content}
      </List.Item>
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

      const da = this.loadDate()
        return <div>
          {da}
        {this.loadInformations()}
        </div>
    }
}
