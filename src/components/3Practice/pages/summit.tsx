import { Component } from 'react'
import { Upload, message, Button,Row,Col,Select   } from 'antd';
import {Link} from 'react-router-dom'
import {UploadOutlined} from '@ant-design/icons';

const { Option } = Select;
export default class Summit  extends Component {
    

    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={3}>
                        
                        <Select
                            showSearch
                            style={{ width: "auto" }}
                            placeholder="提交实验报告至"
                            optionFilterProp="children"
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Upload > <Button icon={<UploadOutlined />}>点击选择文件上传</Button> </Upload>
                    </Col>
                </Row>
            </div>
        )
    }
}
