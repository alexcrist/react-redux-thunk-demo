import React, { Component } from 'react';
import { connect } from 'react-redux';

const Data = ({ number, category, name }) => (
  <div>
    <h4>Number: {number}</h4>
    <h4>Category: {category}</h4>
    <h4>Name: {name}</h4>
  </div>
);

const Warning = (err) => (
  <h4>Error.</h4>
);

const Fetching = () => (
  <h4>Fetching...</h4>
);

class Display extends Component {
  render() {
    if (this.props.fetching) {
      return Fetching();
    } else if (this.props.data) {
      console.log(this.props.data);
      return Data(this.props.data);
    } else {
      return Warning(this.props.err);
    }
  }
};

export default connect(state => state)(Display);