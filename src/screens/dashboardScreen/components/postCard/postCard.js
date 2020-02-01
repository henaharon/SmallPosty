import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { TitleRow } from './components/TitleRow';

@inject('storeDashboardScreen')@observer
export class PostCard extends PureComponent {
    checkForFollowing = () => {
        const { user_id } = this.props.post.item;
        const { iFollowArrayByUserId } = this.props.storeDashboardScreen;
        return iFollowArrayByUserId.includes(user_id);
    }
    followPressed = () => {
        const { user_id } = this.props.post.item;
        this.props.storeDashboardScreen.followRoutine(user_id);
    }

    deletePostPressed = () => {
        const { post_id } = this.props.post.item;
        this.props.storeDashboardScreen.deletePost(post_id);
    }

    render() {
        const { title, image_url, is_my_post } = this.props.post.item;
        return (
            <View style={styles.card}>
                <TitleRow title={title} isMyPost={is_my_post} onPress={this.deletePostPressed} />
                <Image style={styles.image} source={{uri: image_url}} />
                {!is_my_post && !this.checkForFollowing() ? <Button style={styles.button} onPress={this.followPressed}>
                  <Text>Follow</Text>
                </Button> : null}
                {this.checkForFollowing() ? <Button onPress={null}>
                                                <Text style={styles.buttonText}>
                                                    Followed
                                                </Text>
                                            </Button> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '95%', 
        height: 350, 
        alignSelf: 'center',
        elevation: 1.5,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#edecea',
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        flex:2,
    },
    
    buttonText: {
        color: 'black'
    }
  });