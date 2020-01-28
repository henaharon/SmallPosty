import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer} from 'mobx-react';
import styled from 'styled-components/native';
import { VerticalSpace } from '../../components/ui/VerticalSpace';

@observer
export class ErrorMsg extends Component{
    render(){
        const { height, store } = this.props;
        const { errorMsg } = store;        
        return(
            <View style={{height: height}}>
                <VerticalSpace height={10} />
                <RedAlert>{errorMsg}</RedAlert>
            </View>
        );
    }
}

const RedAlert = styled(Text)`
color: #b50029;
font-size: 10px;
text-align: center; 
`;
