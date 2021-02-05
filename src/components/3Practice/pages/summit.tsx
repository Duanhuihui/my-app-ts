import { Component } from 'react'
import { Upload,  Button,Row,Col,Select,Divider   } from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import Line from 'components/3Practice/pages/line'

const { Option } = Select;
export default class Summit  extends Component {
    

    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={4}>
                        
                        <Select
                            showSearch
                            style={{ width: "auto"}}
                            placeholder="提交实验报告至"
                            optionFilterProp="children"
                        >
                            <Option value="jack">王华</Option>
                            <Option value="lucy">李林</Option>
                            <Option value="tom">孙策</Option>
                            <Option value="tom">后续升级成级联选择</Option>
                        </Select>
                    </Col>
                    <Col span={4}>
                        <Upload > <Button icon={<UploadOutlined />}>点击选择文件上传</Button> </Upload>
                    </Col>
                    <Col span={4}><Button type="primary">上传</Button></Col>
                </Row>
                <Divider  orientation="left">已上传的文件</Divider>
                <Row gutter={24}>
                
                <Col span={24}>
                <Line/>
                </Col>
                </Row>
            </div>
        )
    }
}
