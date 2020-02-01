import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { EmailCard } from './emailCard';
import { EmptyListComponent } from './emptyListComponent';

@inject('storeProfileScreen')@observer
export class FollowersList extends PureComponent {
    render() {
        const { followersArray } = this.props.storeProfileScreen;
        return ( <View style={styles.fullWidth}>
            <ScrollView style={styles.flexView}>
                    <FlatList  data={followersArray.slice()}
                            keyExtractor={item => item.f_user_id.toString()} 
                            renderItem={(item) => <EmailCard post={item} />}
                            ListEmptyComponent={() => <EmptyListComponent msg={'No Followers Yet'} />} 
                            />
            </ScrollView>
            </View>
        )
        }
}

const styles = StyleSheet.create({
    flexView: {
        flex: 1
    },
    fullWidth: {
        width: '100%'
    },
  });