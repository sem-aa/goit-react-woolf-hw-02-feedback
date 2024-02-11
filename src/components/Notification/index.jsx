import React, { Component } from 'react';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <h3>{message}</h3>;
  }
}

export default Notification;
