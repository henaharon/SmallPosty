import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'

export const Header = props => (
                <HeaderView>
                    <View style={styles.iconView}>
                      <Image style={styles.icon} source={require('../../../images/artwork.png')}/>
                    </View>
                    <Text style={styles.email}>{props.text}</Text>
                </HeaderView>
            );

  const styles = StyleSheet.create({
    email: {
        color: 'white',
    },
    icon: {
      height: 20,
      width: 20,
    },
    iconView: {
      borderColor: 'white',
      borderWidth: 0.5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 10
    }

  });

const HeaderView = styled(View)`
  display: flex;
  width: 100%;
  height: 17%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #00adb5;
  margin-top: 0.1px;
  elevation: 3;
`;

