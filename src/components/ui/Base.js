import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

export const Base = props => (
    <BaseView color={props.color}>
        {props.children}
    </BaseView>
);

const BaseView = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
    backgroundColor: ${props => props.color};
`;

