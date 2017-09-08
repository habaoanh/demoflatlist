import React, { Component } from 'react';
import { View, Text , TouchableOpacity, StyleSheet, Image} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

import profileIcon from '../../media/temp/profile.png';

const Menu = ({navigation}) => {
    state = {}

        const {container, imageProfile, } = styles;
        return (
            <View style={container}>
                <Image source = {profileIcon} style = {imageProfile}/>
            
                <TouchableOpacity style={{ backgroundColor: '#FF8000' }}
                    onPress={() => navigation.navigate('Screen_Authentication') }
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF8000' }}
                    onPress={() => navigation.navigate('Screen_ChangeInfo') }
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF8000' }}
                    onPress={() => navigation.navigate('Screen_OrderHistory') }
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Go to Order History</Text>
                </TouchableOpacity>

            </View>

        );
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#FA5882',
        borderRightWidth: 3,
        borderColor: '#FFF',
        alignItems: 'center',

    },
    imageProfile:{
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});

export default Menu;