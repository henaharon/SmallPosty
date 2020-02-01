import React, { PureComponent } from 'react';
import { Button } from 'react-native-paper';
import { inject } from 'mobx-react';


@inject('storeAddImageScreen')
export class AddPostButton extends PureComponent {
    onPress = async() => {
        await this.props.storeAddImageScreen.addPost(this.props.navigation);
    }
    render(){
        return(
            <Button color={'black'} mode="contained" onPress={this.onPress}>
                Add Post
            </Button>   
            );
    }
}
