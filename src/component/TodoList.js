import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'helo',
            list: []
        }
    }
    
    render(){
        return (
            <Fragment>
                <div>
                    <input value = {this.state.inputValue} 
                        onChange = {this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>Learning React</li>
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        console.log(e.target.value);
        this.setState({
              inputValue: e.target.value
        })
    }
}

export default TodoList;