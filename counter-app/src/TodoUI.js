import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import { Button } from 'antd'
import { List } from 'antd';
class TodoUI extends Component {
    render() {
        return  (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        placeholder='Todo info'
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.handleBtnClick}
                    >提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width:'300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoUI
