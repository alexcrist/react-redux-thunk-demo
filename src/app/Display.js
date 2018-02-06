import React, { Component } from 'react';
import { connect } from 'react-redux';

const Data = ({ number, category, name }) => (
  <div>
    <div>Number: {number}</div>
    <div>Category: {category}</div>
    <div>Name: {name}</div>
  </div>
);

const Warning = (err) => (
  <div>Error.</div>
);

const Fetching = () => (
  <div>Fetching...</div>
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