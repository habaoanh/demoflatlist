
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from "./components/App"

export default class demo3 extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('demo3', () => demo3);
