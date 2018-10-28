import React from 'react';
import { connect } from 'react-redux';

//无状态组件:一个组件类中只有render函数
const Todolist = (props) =>{
    const { inputValue, changeInputValue, handleClick, handleDelete, list } = props;

    return (
        <div>
            <div>
                <input type="text" value = {inputValue} onChange={changeInputValue.bind(this)}/>
                <button onClick = {handleClick.bind(this)}>提交</button>
            </div>
            <ul>
               {
                    list.map((item,index) => {
                    return <li onClick={ handleDelete } key = {index}>{item}</li>
                })
               }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//store.dispatch.props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            // console.log(e.target.value);
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },

        handleDelete(index){
            const action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action);
        }
    }
}

//connect内容返回容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);