import React, { Component, Fragment } from 'react';
import '../css/style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="InputArea"
                    //扩大显示区域
                    >输入内容</label>
                    <input
                        id = "InputArea"
                    //不建议用class
                        className = 'input'
                        value = {this.state.inputValue} 
                        onChange = {this.handleInputChange}
                    />
                    <button onClick = {this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem(){
        return this.state.list.map((item,index) => {
            return (
                <div>
                    <TodoItem 
                    key = {index}
                    content ={item} 
                    index = {index} 
                    deleteItem = {this.handleItemDelete}
                    /> 
                </div>
            )
        });
    }

    handleInputChange(e){
       const value = e.target.value;
        this.setState(() =>({
            inputValue: value
        }));
    }

    handleBtnClick(){
        this.setState({
           list: [...this.state.list, this.state.inputValue],
           inputValue: ''
        });
    }

    handleItemDelete(index){
        //state 不允许改变任何state
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }
}

export default TodoList;