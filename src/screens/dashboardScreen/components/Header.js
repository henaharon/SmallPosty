import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo'

export const Header = props => (
  <HeaderView>
    <TouchableOpacity onPress={() => props.navigation.navigate('AddPost')}>
      <Icon style={styles.plus} name="plus" size={30} color="white" />
    </TouchableOpacity> 
    <Image style={styles.logo} source={require('../../../images/logo_colored.png')} />
  </HeaderView>
  );

  const styles = StyleSheet.create({
    logo: {
        width: 80, 
        height: 45,
        marginLeft: '25%' 
    },
    plus: {
      paddingRight: 15
    }
  });

const HeaderView = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #00adb5;
  margin-top: 0.1px;
  elevation: 3;
`;

