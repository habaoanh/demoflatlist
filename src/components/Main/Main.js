import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Shop from './Shop/Shop';
import Menu from './Menu';
import {SideMenu} from '../Router';
//const { height } = Dimensions.get('window');

export default class Main extends Component {
  render() {
    return (
     <SideMenu />
    );
  }
}
