import React, { Component } from 'react'
import { Form, Row, Input, Col, Button, Upload, Space,message,DatePicker  } from 'antd'
import { FormInstance } from 'antd/lib/form';
import {submitCourse,deleteFile,uploadfiles,uploadfile} from 'apis/index'
import {upload}from 'config'
import { UploadOutlined } from '@ant-design/icons';


const {TextArea} = Input
interface CourseFormProp{
    updateList:()=>any
}
const { RangePicker } = DatePicker;
export default class CourseForm extends Component<CourseFormProp, any> {
    state={
        fileList:[],
        imgList:[],
        previewImage: '',
    }
    formRef = React.createRef<FormInstance>();

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
        const {imgList,fileList} = this.state
        let files:any[] = imgList.concat(fileList,[])
        this.onUploadfiles(files)
        submitCourse(value).then((result)=>{
            if(result ===1){
                message.success(`新增${value.title}成功`)
                // this.onReset()
                this.setState({
                    imgList:[],
                    fileList:[]
                })
                this.props.updateList()
            }else{
                message.warn(`新增${value.title}失败`)
            }
        }).catch(()=>{
            message.error(`新增${value.title}失败`)
        })

    }
  //删除文件
    deleteFile=(fileName:string)=>{
        deleteFile(fileName).then(result=>{
        this.setState({
            deleteSuccess:result
        })
        })
    }
    uploadImg={
        name: 'file',
        // multiple: true,
        // action: upload,
        onChange:(info:any)=>{
            const { status } = info.file;
            let imgList = [...info.fileList]
            imgList = imgList.slice(-1)
            this.setState({ imgList });
            if (status === 'done') {
              this.formRef.current!.setFieldsValue({ avatar: info.file.name });
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
        onRemove:(value:any)=>{
            console.log("remove",value)
            if(value.name !== undefined){
                console.log("removeList",value.name)
                deleteFile(value.name)
                this.setState({
                    imgList:[]
                })
            }else{
                this.setState({
                    imgList:[]
                })
            }
            return true;
        },
        beforeUpload:(file:any):boolean=>{
            this.setState((state:any)=>({
                imgList: [...state.imgList, file],
            }))
            return false;
        }
    }
    uploadFile={
        name: 'file',
        // multiple: true,
        // action: upload,
        onChange:(info:any)=>{
            const { status } = info.file;
            let fileList = [...info.fileList]
            fileList = fileList.slice(-1)
            this.setState({ fileList });
            if (status === 'done') {
              this.formRef.current!.setFieldsValue({ href: info.file.name });
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
          onRemove:(value:any)=>{
            deleteFile(value.name)
            return true;
        },
        beforeUpload:(file:any):boolean=>{
            this.setState((state:any)=>({
                fileList: [...state.fileList, file],
            }))
            return false;
        }
    }
    //批量上传文件接口
    onUploadfiles=(files:any[])=>{
        console.log("files",files)
        files.forEach((file)=>{
            uploadfile(file)
        })
    }
    onReset=()=>{
        const {fileList} = this.state
        this.formRef.current!.resetFields();
        this.uploadImg.onRemove(fileList[0])
        this.uploadFile.onRemove(fileList)
        this.setState({fileList:[],imgList:[]});
    }

    render() {
        const {fileList,imgList} = this.state
        return <>
            <Form name="nest-messages"
                  onFinish={this.onFinish}
                  ref={this.formRef}
                {...this.formItemLayout}
            >
                <Row gutter={12} >
                    <Col span={16}>
                            <Row >
                            <Col span={24}>
                            <Form.Item name={'title'} label="课程名称" ><Input/></Form.Item>
                            </Col>
                            </Row>
                            <Row>
                            <Col span={24}>
                            <Form.Item name={'teacher'} label="教课老师" ><Input /></Form.Item>
                            </Col>
                            </Row>
                            <Row >
                            <Col span={24}>
                            <Form.Item name={'content'} label="概要" ><TextArea rows={4} /></Form.Item>
                            <Form.Item name={'avatar'} label="封面" hidden={true}><Input></Input></Form.Item>
                            <Form.Item name={'href'} label="资源" hidden={true}><Input></Input></Form.Item>
                            </Col>
                            </Row>
                    </Col>
                    <Col span={4}>
                        <Form.Item>
                            <Upload {...this.uploadImg} fileList={imgList} >
                            <Button icon={<UploadOutlined />}>上传封面</Button>
                            </Upload>
                        </Form.Item>
                        </Col>
                        <Col span={4}>
                        <Form.Item>
                            <Upload {...this.uploadFile} fileList={fileList} >
                            <Button icon={<UploadOutlined />}>上传附件</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                    <Form.Item style={{  marginTop: 40,}} {...this.tailLayout}  >
                        <Space size={20}>
                        <Button type="primary" htmlType="submit" size={'middle'}>提交</Button>
                        <Button type="primary"  danger htmlType="reset" size={'middle'} onClick={this.onReset}>重置</Button>
                        </Space>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
            <RangePicker inputReadOnly></RangePicker>
        </>
    }


}