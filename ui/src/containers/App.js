import React, { Component } from 'react';
import {connect} from 'react-redux';

import Client from "../Client";

// import {testPlayInteractions} from '../actions/TestPlayInteractions';

import {testGet} from '../actions'

class App extends Component {

    state = {title: ''};

    componentDidMount() {
        this.props.testGet();
    }

    render() {
        console.log(this.props);
        if(this.state.title){
            return (
                <div className="App">
                    Hello {this.state.title}
                </div>
            );
        }
        return (
            <div className="App">
                Hello World
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {blah: state.testPlayInteractions};
};

export default connect(mapStateToProps, {testGet})(App);