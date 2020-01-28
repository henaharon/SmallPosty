import React, { PureComponent } from 'react';
import { Button } from 'react-native-paper';
import { inject } from 'mobx-react';


@inject('storeRegisterScreen')
export class RegisterButton extends PureComponent {
    onPress = async() => {         
        await this.props.storeRegisterScreen.joinPressed(this.props.navigation);
    }
    render(){
        return(
            <Button color={'black'} mode="contained" onPress={this.onPress}>
                Join SmallPosty
            </Button>   
            );
    }
}
