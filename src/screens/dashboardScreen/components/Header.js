import React from 'react';
import {
    View,
    StyleSheet,
    Text,
  } from 'react-native';
import styled from 'styled-components/native';

export const Header = () => (   <HeaderComponent>
  <HeaderText>
  DashboardScreen
  </HeaderText>
</HeaderComponent>);


const HeaderComponent = styled(View)`
  height: 100;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 20px;
`;

const HeaderText = styled(Text)`
color: black;
`;
