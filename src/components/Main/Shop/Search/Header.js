import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../../media/appIcon/ic_logo.png';
import icMenu from '../../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

const Header = ({navigation}) =>{
    state = {}
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerOpen') 
                        }
                    >
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}> LifePlus Demo </Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput style={textInput}

                />
            </View>
        );
    
}
Header.propTypes = {
    navigation: React.PropTypes.object.isRequired,
};
export default Header;

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#FA5882', 
        padding: 5, 
        justifyContent: 'space-around', },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { height: height / 24, backgroundColor: '#FFF' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});