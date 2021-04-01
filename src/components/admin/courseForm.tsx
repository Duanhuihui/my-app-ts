import React, { Component } from 'react'
import { Form, Row, Input, Col, Button, Upload, Space } from 'antd'
import {submitCourse,uploadImg} from 'apis/index'
const { Dragger } = Upload
const {TextArea} = Input
export default class CourseForm extends Component<any, any> {
    formItemLayout = {
        labelCol: {
            xs: { span: 4 },
            sm: { span: 2 },
        },

    };
     tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

    onFinish = (value:any)=>{
        console.log("value",value)
        submitCourse(value)
    }
    uploadImg=(file: any)=>{
        console.log("12345676543212345432123456")
        return "fff"
    }
    fff={
        action:(file:any)=>{this.uploadImg(file);return "s"}

    }

    render() {
        return <>
            <Form name="nest-messages"
                  onFinish={this.onFinish}
                {...this.formItemLayout}
            >
                <Row gutter={12} >
                    <Col span={16}>
                            <Row >
                                <Col span={24}>
                            <Form.Item
                                name={'title'}
                                label="课程名称"
                            >
                                <Input />
                            </Form.Item>
                            </Col>
                            </Row>
                            <Row>
                            <Col span={24}>
                            <Form.Item
                                name={'teacher'}
                                label="教课老师"
                            >
                                <Input />
                            </Form.Item>
                            </Col>
                            </Row>
                            <Row >
                            <Col span={24}>
                                <Form.Item
                                    name={'content'}
                                    label="概要"
                                ><TextArea rows={4} />
                                </Form.Item>
                            </Col>
                            </Row>
                    </Col>
                    <Col span={8}>
                        <Dragger {...this.fff} >
                                <p className="ant-upload-text">拖拽或者点击上传文件</p>
                                <p className="ant-upload-hint">照片用作本封面</p>
                        </Dragger>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                    <Form.Item style={{  marginTop: 40,}} {...this.tailLayout}  >
                        <Space size={20}>
                        <Button type="primary" htmlType="submit" size={'middle'}>提交</Button>
                        <Button type="primary" htmlType="button" size={'middle'} >暂存</Button>
                        <Button type="primary"  danger htmlType="reset" size={'middle'}>重置</Button>
                        </Space>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    }


}