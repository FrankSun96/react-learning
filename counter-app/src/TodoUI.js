import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoUI = (props) => {
        return  (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input
                        value={props.inputValue}
                        placeholder='Todo info'
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={props.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={props.handleBtnClick}
                    >提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width:'300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
}

export default TodoUI
