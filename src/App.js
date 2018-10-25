import React, { Component ,Fragment} from 'react';

import './css/App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true
        }
        this.handleToggole = this.handleToggole.bind(this);
    }
    
    render() {
        return (
            //Fragment占位
            <Fragment>
                <div className = {this.state.show ? 'show' : 'hide'}>
                    hello, dell lee
                </div>
                <button 
                    onClick={this.handleToggole}
                >toggle</button>
            </Fragment>
        );
    }

    handleToggole(){
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default App;