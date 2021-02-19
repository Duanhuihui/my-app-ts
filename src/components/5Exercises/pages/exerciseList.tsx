import React from 'react'
import {Row,Col,Radio,Checkbox,Tag} from 'antd'

export default class ExerciseList extends React.Component{
   
    render(){
        const radioStyle = { display: 'block', height: '30px', lineHeight: '30px', };
        const judge = { display: 'block', height: '30px', lineHeight: '30px', };
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
            <Row  style={{paddingTop:'10px' }}>
                <Col span={1}>
                <Radio.Group >
                <Radio value={1}>
                </Radio>
                <Radio  value={2} style={{color:'red'}}>
                </Radio>
                </Radio.Group>
                </Col>
                <Col span={23}>
                判断题选项,判断题选项判断题选项判断题选项判断题选项判断题选项,判断题选项判断题选项判断题选项
                </Col>
            </Row>
            </div>
            </>}
    
}