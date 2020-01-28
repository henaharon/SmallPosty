import React, { PureComponent } from 'react';
import { Button } from 'react-native-paper';

export class JoinButton extends PureComponent {
    onPress = () => {        
        this.props.navigation.navigate('Register');
    }
    render(){
        return(
            <Button color={'white'} mode="contained" onPress={this.onPress}>
                JOIN
            </Button>        
            );
    }
}
