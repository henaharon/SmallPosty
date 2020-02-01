import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign'

export const EmailCard = props => (
                <CardView>
                    <Icon name="idcard" size={25} color="#7f7f7d" />
                    <Text style={styles.email}>{props.post.item.email}</Text>
                </CardView>
            );

  const styles = StyleSheet.create({
    email: {
        color: 'black',
        marginLeft: 10,
        color: '#7f7f7d'
    },

  });

const CardView = styled(View)`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  padding-Left: 10px;
  margin-vertical: 1.5px;
  elevation: 1;
`;

