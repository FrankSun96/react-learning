import React, { Component }from 'react'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoUI from './TodoUI';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return <TodoUI
                    inputValue = {this.state.inputValue}
                    list = {this.state.list}
                    handleInputChange = {this.handleInputChange}
                    handleBtnClick = {this.handleBtnClick}
                    handleItemDelete = {this.handleItemDelete}
                />
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        if(this.state.inputValue.trim() === '') {
            return null;
        }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action =getDeleteItemAction(index);
        store.dispatch(action)
    }
}

export default Todo;
