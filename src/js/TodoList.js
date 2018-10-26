import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from '../store';


class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render(){
        return (
            <div style={{marginTop: '10px',marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder='todo' 
                        style = {{width: '300px',marginRight: '10px'}}
                        onChange = {this.handleInputChange}
                        />
                    <Button type = "primary">提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
            </div>
        );
    }

    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispach(action);
    } 
}


export default TodoList;