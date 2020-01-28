import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const RegisterArea = props => (
    <RegisterView>
       {props.children}
    </RegisterView>
);

const RegisterView = styled(View)`
    width: 80%;
    height: 80%;
    align-self: center;
    justify-content: center;
`;