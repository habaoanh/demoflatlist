import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class OrderHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2EFEF7' }}>
        <Text>Order History</Text>
        <TouchableOpacity style={{ backgroundColor: '#00FF80' }}
          onPress={() => { this.props.navigation.goBack() }}
        >
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
