import React, { PureComponent } from 'react';
import { Button } from 'react-native-paper';
import { inject } from 'mobx-react';

@inject('storeLoginScreen')
export class SignInButton extends PureComponent {
    onPress = async() => {        
        await this.props.storeLoginScreen.signInPressed(this.props.navigation);
    }
    render(){
        return(
            <Button color={'black'} mode="contained" onPress={this.onPress}>
                Sign In
            </Button>        
            );
    }
}
