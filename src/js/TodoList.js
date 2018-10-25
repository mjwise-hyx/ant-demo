import React, { Component, Fragment } from 'react';
import '../css/style.css';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
        console.log('componentWillMount');
    }
      //页面第一次被挂载--放置ajax请求
    componentDidMount(){
        console.log('componentDidMount');
        axios.get('/api/todolist')
        .then((res)=>{
            console.log(res.data);
            this.setState(()=>{
                return {
                    list: [...res.data]
                }
            })
        })
        .catch(()=>{alert('error')})
    }
    
    //组件被更新之前，他会自动被执行
    shouldComponentUpdate(){ 
        console.log('shouldComponentUpdate');
        return true;
   
    }
    //在should之后，true被执行，false不会被执行
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    //生命周期函数
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }


    render(){
        console.log('render');

        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea"
                    //扩大显示区域
                    >输入内容</label>
                    <input
                        id = "insertArea"
                    //不建议用class
                        className = 'input'
                        value = {this.state.inputValue} 
                        onChange = {this.handleInputChange}
                        ref = {(input) => {this.input = input}}
                    />
                    <button onClick = {this.handleBtnClick}>提交</button>
                </div>
                <ul ref = {(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem(){
        return this.state.list.map((item,index) => {
            return (
                    <TodoItem 
                    key = {index}
                    content ={item} 
                    index = {index} 
                    deleteItem = {this.handleItemDelete}
                    /> 
            );
        });
    }

    // e.target.valueDOM元素节点
    handleInputChange(e){
       const value = e.target.value;
        this.setState(() =>({
            inputValue: value
        }));
    }

    handleBtnClick(){
        this.setState((prevState) => ({
           list: [...prevState.list, prevState.inputValue],
           inputValue: ''
        }),()=>{
            //  console.log(this.ul.querySelectorAll('div').length); 
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