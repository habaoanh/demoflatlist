import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import { MainStack } from './Router';
// import {Tabs} from './Router';
import {SideMenu} from './Router';
StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}
