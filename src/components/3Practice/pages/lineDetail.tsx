import React, { Component } from 'react'
import {Button } from 'antd'
import {withRouter} from "react-router-dom";


class LineDetail extends Component {
    goBack=()=>{
        // this.props.history.go(-1)
        // const{history} = this.props
        console.log(this.props.history);
        
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