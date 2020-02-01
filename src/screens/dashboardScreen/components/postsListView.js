import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { PostCard } from './postCard/postCard';

@inject('storeDashboardScreen')@observer
export class PostsListView extends PureComponent {
    render() {
        const { postsArray } = this.props.storeDashboardScreen;
        return (
            <SafeAreaView style={styles.flexView}>
                    <FlatList  data={postsArray.slice()}
                            keyExtractor={item => item.post_id.toString()} 
                            renderItem={(item) => <PostCard post={item} />} 
                            />
            </SafeAreaView>
        )
        }
}

const styles = StyleSheet.create({
    flexView: {
        flex: 1
    }
  });