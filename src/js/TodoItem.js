import React,{ Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props)
        //节省开发性能
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        const { content } = this.props;
        return <div
            onClick={this.handleClick}
            dangerouslySetInnerHTML={{__html: content}}
            >
            </div>
    }

    handleClick(){
        const { deleteItem} = this.props;
        deleteItem(this.props.index);
        
    }
}

export default TodoItem;