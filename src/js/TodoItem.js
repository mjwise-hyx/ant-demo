import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        //节省开发性能
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
             return false;
        }
       
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
        const { deleteItem } = this.props;
        deleteItem(this.props.index);
        
    }
}

//引入PropTypes做数据校验
//限制父组件传值的
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}


export default TodoItem;