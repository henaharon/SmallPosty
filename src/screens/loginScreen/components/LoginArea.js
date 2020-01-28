import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const LoginArea = props => (
    <LoginView>
       {props.children}
    </LoginView>
);

const LoginView = styled(View)`
    width: 80%;
    height: 80%;
    align-self: center;
`;