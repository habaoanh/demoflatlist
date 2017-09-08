import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
  render() {
    const {
      row1, iconStyle, titleStyle,
      container, controlStyle, signInStyle,
      signUpStyle, inputStyle, bigButton } = styles;
    return (
      <View style={container}>
        <View style={row1}>
          <TouchableOpacity
            onPress={() => { this.props.navigation.goBack() }
            }
          >
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}> LifePlus Demo </Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        <View>
          <TextInput style={inputStyle} placeholder="Enter your email" />
          <TextInput style={inputStyle} placeholder="Enter your email" />
          <TouchableOpacity style={bigButton} >
            <Text>SIGN IN NOW</Text>
             </TouchableOpacity>
        </View>
        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle}>
            <Text >SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={signUpStyle}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#2EFEF7',
    padding: 20,
    justifyContent: 'space-between',
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
  iconStyle: { width: 30, height: 30 },
  controlStyle: {
    flexDirection: 'row',
    width: 300,
  },
  signInStyle: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 1,
  },
  signUpStyle: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 20,
    marginLeft: 1,
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
}); 
