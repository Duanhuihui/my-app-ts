import React, { Component } from 'react'
import { Form, Row, Input, Col, Button, Upload, message } from 'antd'
const { Dragger } = Upload
const {TextArea} = Input
export default class CourseForm extends Component<any, any> {
    formItemLayout = {
        labelCol: {
            xs: { span: 1 },
            sm: { span: 4 },
        },

    };

    render() {
        return <>
            <Form name="nest-messages"
                {...this.formItemLayout}
            >
                <Row gutter={12} >
                    <Col span={18}>
                        <Row>
                            <Col span={12}>
                            <Form.Item
                                name={'title'}
                                label="课程名称"
                            >
                                <Input />
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item
                                name={'teacher'}
                                label="教课老师"
                            >
                                <Input />
                            </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                        <Col span={12}>
                            <Form.Item
                                name={'content'}
                                label="概要"
                            ><TextArea rows={4} />
                            </Form.Item>
                        </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                    <Dragger  >
                            <p className="ant-upload-drag-icon">
                            </p>
                            <p className="ant-upload-text">拖拽或者点击上传文件</p>
                            <p className="ant-upload-hint">
                                照片用作本封面
                        </p>
                    </Dragger>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Item style={{ textAlign: 'center', marginTop: 40 }}>
                    <Button type="primary" htmlType="submit" size={'middle'}>
                        Submit
                            </Button>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    }


}