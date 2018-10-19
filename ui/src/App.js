import React, { Component } from 'react';
import './App.css';

import Client from "./Client";

class App extends Component {

    state = {title: ''};

    async componentDidMount() {
        Client.getSummary(summary => {
            this.setState({
                title: summary.content
            });
        })
    }

  render() {
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

export default App;
