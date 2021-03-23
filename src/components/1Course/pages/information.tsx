import { Row,Divider,Typography } from 'antd';
import React,{ Component } from 'react'
import {informations,noticeData,columns} from 'data/db'

const { Title, Paragraph, Link } = Typography;


export default class Information extends Component<any,any>{
  state={

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
        {this.loadInformations()}
        </div>
    }
}
