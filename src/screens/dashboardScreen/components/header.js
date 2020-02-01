import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo'

export const Header = props => (
  <HeaderView>
    <View style={styles.fill} />
    <Image style={styles.logo} source={require('../../../images/logo_colored.png')} />
    <TouchableOpacity onPress={() => props.navigation.navigate('AddPost')}>
      <Icon name="plus" size={30} color="white" />
    </TouchableOpacity> 
  </HeaderView>
  );

  const styles = StyleSheet.create({
    logo: {
        width: 80, 
        height: 45,
    },
    fill: {
      width: 30, 
    }
  });

const HeaderView = styled(View)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: #00adb5;
  margin-top: 0.1px;
  elevation: 3;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
`;

