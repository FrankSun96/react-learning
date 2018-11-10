import React,{ Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends  Component {
    constructor(props) {
        super(props);
        //当state或者props改变时 render就会重新执行
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content){
            return true;
        } else {
            return false;
        }
    }
    render() {
        const { content } = this.props ;
        return (
            <div onClick={ this.handleClick }>
                {content}
            </div>
        )
    }
    handleClick() {
        const { deleteItem, index }  = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem
