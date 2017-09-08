import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import Header from '../Search/Header';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct'

export default class Home extends Component {
static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        header: (headerProps) => (
            <Header navigation={navigation} />
        )
    })    
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Collection/>
                <Category navigation={this.props.navigation}/>
                <TopProduct/>
            </ScrollView>
        );
    }
}