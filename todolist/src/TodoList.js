import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
    const {inputValue, handleInputChange, handleClick, list} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleClick}>提交</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li onClick={() => {
                                props.handleDelete(index)
                            }} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateTopProps = (state) => {
    return  {
        inputValue: state.inputValue,
        list: state.list
    }
};

//store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleClick(){
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                value: index
            };
            dispatch(action);
        }
    }
};
export default connect(mapStateTopProps, mapDispatchToProps)(TodoList);
