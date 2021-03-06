import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inputs from './Inputs';
import Display from './Display';
import { fetchItem } from '../state/actions';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>React, Redux, and Thunk</h1>
        <hr/>
        <Inputs click={this.props.fetchItem}/>
        <Display />
      </div>
    );
  }
}

export default connect(state => state, { fetchItem })(App);
