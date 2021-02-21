import React from 'react'
import {Row,Col,Radio,Checkbox,Tag,Image,Input  } from 'antd'
import './pages.less'
const { TextArea } = Input;
export default class ExerciseList extends React.Component{
   
    render(){
        const radioStyle = { display: 'block', height: '30px', lineHeight: '30px', };
        const judgeStyle = {  height: '30px', lineHeight: '30px', };
        const InputTemp = <><input className="inputTemp"></input></>
        return <>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}><Tag color="#f50">单选</Tag>1.这是题目描述，请根据题目描述选择正确的答案。</Col>
            </Row>
            <div style={{paddingLeft:'20px'}}>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col>
                <Radio.Group >
                <Radio style={radioStyle} value={1}>
                Option A
                </Radio>
                <Radio style={radioStyle} value={2}>
                Option B
                </Radio>
                <Radio style={radioStyle} value={3}>
                Option C
                </Radio>
                <Radio style={radioStyle} value={4}>
                Option D
                </Radio>
                </Radio.Group>
                </Col>
            </Row>
            </div>
            <Row gutter={5} style={{paddingTop:'10px' }}>
            <Col span={24}><Tag color="#f50">多选</Tag>2.这是题目描述，请根据题目描述选择正确的答案。</Col>
            </Row>
            <div style={{paddingLeft:'20px'}}>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col>
                <Checkbox.Group style={{ width: '100%' }} >
                    <Row>
                    <Col span={8}>
                        <Checkbox value="A">A11111111111111111111111111111111111111111</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="B">B2222222222222222222222222222222222222222222222</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="C">C33333333333333333333333333333333333333333</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="D">D</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="E">E</Checkbox>
                    </Col>
                    </Row>
                </Checkbox.Group>
                </Col>
            </Row>
            </div>

            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}><Tag color="#f50">判断</Tag>3.这是题目描述，请根据题目描述选择正确的答案。</Col>
            </Row>
            <div style={{paddingLeft:'20px'}}>
            <Row  gutter={5}style={{paddingTop:'10px' }} >
                <Col span={2}>
                <Radio.Group >
                <Radio value={1}>
                </Radio>
                <Radio  value={2} style={{color:'red'}}>
                </Radio>
                </Radio.Group>
                </Col>
                <Col span={22}> 判断题选项,判断题选项判断题选项判断题选项判断题选项判断题选项,判断题选项判断题选项判断题选项 </Col>
            </Row>
            <Row  style={{paddingTop:'10px' }}>
                <Col span={2}>
                <Radio.Group >
                <Radio value={1} />
                <Radio  value={2} />
                </Radio.Group>
                </Col>
                <Col span={22}>
                判断题选项,判断题选项判断题选项判断题选项判断题选项判断题选项,判断题选项判断题选项判断题选项
                </Col>
            </Row>
            </div>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}><Tag color="#f50">填空</Tag>4.这是题目描述，请根据题目描述填写正确的答案。</Col>
            </Row>
            <div style={{paddingLeft:'20px'}}>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}>1. 填写这两个空格{InputTemp}和{InputTemp}</Col>
            </Row>
            </div>
            <div style={{paddingLeft:'20px'}}>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}>2. 填写这个空格测试测试测试{InputTemp}</Col>
            </Row>
            </div>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}><Tag color="#f50">计算</Tag>5.这是题目描述，请根据题目描述填写正确的答案。</Col>
            </Row>
            <div style={{paddingLeft:'20px'}}>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}>1. 题目要求题目要求题目要求题目要求题目要求题目要求</Col>
            </Row>
            <Row gutter={5}>
                <Col span={8}>
                <Image
                    width={'100%'}
                    height={200}
                    src="error"
                    />
                </Col>
                <Col span={16}>
                <TextArea placeholder="请在此键入你的答案" autoSize={true}/>
                </Col>
            </Row>
            </div>
            <div style={{paddingLeft:'20px'}}>
            <Row gutter={5} style={{paddingTop:'10px' }}>
                <Col span={24}>2. 题目要求题目要求题目要求题目要求题目要求题目要求</Col>
            </Row>
            <Row gutter={5}>
                <Col span={24}>
                <TextArea placeholder="请在此键入你的答案" autoSize={true}/>
                </Col>
            </Row>
            </div>
            </>}
    
}