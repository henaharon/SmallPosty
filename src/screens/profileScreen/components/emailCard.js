import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign'

export const EmailCard = props => (
                <CardView>
                    <Text style={styles.email}>{props.post.item.email}</Text>
                    <Icon name="idcard" size={25} color="#7f7f7d" />
                </CardView>
            );

  const styles = StyleSheet.create({
    email: {
        color: 'black',
        marginRight: 10,
        color: '#7f7f7d'
    },

  });

const CardView = styled(View)`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  padding-right: 10px;
  margin-vertical: 1.5px;
  elevation: 1;
`;

