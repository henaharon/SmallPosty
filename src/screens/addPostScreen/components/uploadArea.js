import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const UploadArea = props => (
    <UploadView>
       {props.children}
    </UploadView>
);

const UploadView = styled(View)`
    width: 90%;
    height: 93%;
    align-self: center;
    justify-content: center;
`;