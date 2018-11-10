import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'
import axois from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">input</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        )
    }

    componentDidMount() {
        axois.get('/api/todolist')
            .then((res)=>{
                this.setState(() => ({
                    list: [...res.data]
                }))
            })
            .catch(()=>{})
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem = {this.handleItemDelete}
                />
            )
        })
    }
    handleInputChange() {
        //异步操作
        const value = this.input.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }
    handleBtnClick() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }

}

export default TodoList
