import React,{ Component } from 'react'
import { Row,Divider,Col,Avatar,Typography,Image,Descriptions   } from 'antd'
import imageA from 'images/a.png'
import imageD from 'images/d.png'
import imageC from 'images/c.png'
import './pages.less'
const { Title,Text,Paragraph} = Typography;


export default class Contact extends Component{
    
    render(){
        return <>
        <Divider orientation="left">师资队伍</Divider>
        <Row>
      <Col span={4} className="avatar">
      <Avatar  shape={'square'} size={128}  src={imageA}/>
      <Title level={5}>李先宏 教授</Title>
      <Paragraph><Text strong>主授:</Text>计算机原理</Paragraph>
      </Col>
      <Col span={4} className="avatar">
      <Avatar  shape={'square'} size={128}  src={imageD}/>
      <Title level={5}>李先宏 教授</Title>
      <Paragraph><Text strong>主授:</Text>计算机原理</Paragraph>
      </Col>
      <Col span={4} className="avatar">
      <Avatar  shape={'square'} size={128}  src={imageC}/>
      <Title level={5}>李先宏 教授</Title>
      <Paragraph><Text strong>主授:</Text>计算机原理</Paragraph>
      </Col>
      <Col span={4} className="avatar">
      <Avatar  shape={'square'} size={128}  src={imageA}/>
      <Title level={5}>李先宏 教授</Title>
      <Paragraph><Text strong>主授:</Text>计算机原理</Paragraph>
      </Col>
      <Col span={4} className="avatar">
      <Avatar  shape={'square'} size={128}  src={imageD}/>
      <Title level={5}>李先宏 教授</Title>
      <Paragraph><Text strong>主授:</Text>计算机原理</Paragraph>
      </Col>
      <Col span={4} className="avatar">
      <Avatar  shape={'square'} size={128}  src={imageC}/>
      <Title level={5}>李先宏 教授</Title>
      <Paragraph><Text strong>主授:</Text>计算机原理</Paragraph>
      </Col>
    </Row>
        <Divider orientation="left">成果展示</Divider>
        <Row>
            <Col span={6}>
                <Row gutter={10} wrap={false}>
                    <Col><Image width={120} height={180} src={imageA} className='colStyle' /></Col>
                    <Col>
                    <Paragraph><Text strong>项目:基于XXXX的研究系统深入分析</Text></Paragraph>
                        <Paragraph>带队导师：黄宗泽</Paragraph>
                        <Paragraph>研究内容：适用超高网络流量时访问指数增长应对</Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row gutter={10} wrap={false}>
                    <Col><Image width={120} height={180} src={imageC} className='colStyle' /></Col>
                    <Col>
                    <Paragraph><Text strong>项目:基于XXXX的研究系统深入分析</Text></Paragraph>
                        <Paragraph>带队导师：黄宗泽</Paragraph>
                        <Paragraph>研究内容：适用超高网络流量时访问指数增长应对</Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row gutter={10} wrap={false}>
                    <Col><Image width={120} height={180} src={imageC} className='colStyle' /></Col>
                    <Col>
                    <Paragraph><Text strong>项目:基于XXXX的研究系统深入分析</Text></Paragraph>
                        <Paragraph>带队导师：黄宗泽</Paragraph>
                        <Paragraph>研究内容：适用超高网络流量时访问指数增长应对</Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row gutter={10} wrap={false}>
                    <Col><Image width={120} height={180} src={imageC} className='colStyle' /></Col>
                    <Col>
                    <Paragraph><Text strong>项目:基于XXXX的研究系统深入分析</Text></Paragraph>
                        <Paragraph>带队导师：黄宗泽</Paragraph>
                        <Paragraph>研究内容：适用超高网络流量时访问指数增长应对</Paragraph>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Divider orientation="left">联系方式</Divider>
        <Descriptions   layout="horizontal">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
        </Descriptions>
        </>
    }
}