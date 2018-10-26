import React, { Component} from 'react';
import TodoListUI from './TodoListUI';
import store from '../store';
import { getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreator'
// import axios from 'axios'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        //组件去订阅store
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return <TodoListUI 
            inputValue = {this.state.inputValue}
            list = {this.state.list}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            handleItemDelete = {this.handleItemDelete}
         />
    }

    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}


export default TodoList;