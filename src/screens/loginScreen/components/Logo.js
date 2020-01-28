import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const Logo = () => (
    <View>
        <Image style={styles.logo} source={require('../../../images/logo_colored.png')} />
    </View>
);

const styles = StyleSheet.create({
    logo: {
        width: 200, 
        height: 110, 
        alignSelf: 'center'
    },
  });