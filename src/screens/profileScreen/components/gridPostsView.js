import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { FlatList, View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { EmptyListComponent } from './emptyListComponent';

const numColumns = 3; 
@inject('storeProfileScreen')@observer
export class GridPostsView extends PureComponent {
    renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Image style={styles.imageThumbnail} source={{uri:item.image_url}} />
            </View>
        )
    }
    render() {
        const { myPostsArray } = this.props.storeProfileScreen;
        return ( <View style={styles.fullWidth}>
                    <ScrollView style={styles.flexView}>
                        <FlatList data={myPostsArray.slice()}
                            numColumns={numColumns}
                            style={styles.flexView}
                            keyExtractor={item => item.post_id} 
                            renderItem={this.renderItem}
                            ListEmptyComponent={() => <EmptyListComponent msg={'No Posts Yet'} />} 
                            />
                    </ScrollView>
                </View>)
        }
}

const styles = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    fullWidth: {
        width: '100%'
    },
    imageThumbnail: {
        padding: 5,
        margin: 2,
        width: Dimensions.get('window').width*0.965 / numColumns,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').width / numColumns,
      },
  });