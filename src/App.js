import React, { Component ,Fragment} from 'react';
import { CSSTransition ,TransitionGroup } from 'react-transition-group';
import './css/App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        // this.handleToggole = this.handleToggole.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    
    render() {
        return (
            //Fragment占位
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item,index) => {
                        return (
                            <CSSTransition
                                in = {this.state.show}
                                timeout = {500}
                                classNames = 'fade'
                                unmountOnExit
                                onEntered={(el) => {el.style.color='blue'}}
                                appear = {true}
                                key ={index}
                            >
                            <div
                              
                            >{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button 
                    onClick={this.handleAddItem}
                >toggle</button>
            </Fragment>
        );
    }

    handleAddItem(){
        this.setState((prevState)=>{
            return {
                list: [...prevState.list,'item']
            }
        })
    }

    handleToggole(){
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default App;