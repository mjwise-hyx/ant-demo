import React, { Component, Fragment } from 'react';
import '../css/style.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
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
                        onChange = {this.handleInputChange.bind(this)}
                    />
                    <button onClick = {this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                       
                        this.state.list.map((item,index) => {
                            return (
                                <li
                                key={index} 
                                onClick = {this.handleItemDelete.bind(this,index)}
                                dangerouslySetInnerHTML = {{__html: item}} 
                                >
                          
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
       // console.log(e.target.value);
        this.setState({
              inputValue: e.target.value
        })
    }

    handleBtnClick(){
        this.setState({
           list: [...this.state.list, this.state.inputValue],
           inputValue: ''
        })
    }

    handleItemDelete(index){
        //state 不允许改变任何state
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;