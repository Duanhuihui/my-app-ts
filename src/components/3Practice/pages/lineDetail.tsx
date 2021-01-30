import React, { Component } from 'react'
import {Button } from 'antd'
import { withRouter } from 'react-router-dom'

class LineDetail extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    goBack=()=>{
        // this.props.history.go(-1)
        console.log('后退');
        
    }
    render() {
        return (
            <div>
                <Button onClick={this.goBack}>返回上一页</Button>
                细节部分
            </div>
        )
    }
}
export default  withRouter(LineDetail);