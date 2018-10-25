import React, { Component ,Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import './css/App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.handleToggole = this.handleToggole.bind(this);
    }
    
    render() {
        return (
            //Fragment占位
            <Fragment>
                <CSSTransition
                    in = {this.state.show}
                    timeout = {500}
                    classNames = 'fade'
                    unmountOnExit
                    onEntered={(el) => {el.style.color='blue'}}
                    appear = {true}
                >
                    <div>
                        hello, dell lee
                    </div>
                </CSSTransition>

                {
                    this.state.list.map((item) => {
                        return (
                            <div>{item}</div>
                        )
                    })
                }
                <button 
                    onClick={this.handleToggole}
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