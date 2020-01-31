import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { inject, observer } from 'mobx-react';

@inject('storeDashboardScreen')@observer
export class SortMenu extends Component {
  onPressNewest = () => {
    this.props.storeDashboardScreen.sortByNewest();
  }
  onPressOldest = () => {
    this.props.storeDashboardScreen.sortByOldest();
  }
  onPressFollowed = () => {
    this.props.storeDashboardScreen.sortByFollowed();
  }
  onPressUnfollowed = () => {
    this.props.storeDashboardScreen.sortByUnfollowed();
  }

  render() {
    return (
        <View style={styles.menuView}>
                <Divider style={styles.filterDividor} />
                <Button contentStyle={styles.button} onPress={this.onPressNewest}>
                    <Text style={styles.buttonText}>
                        Newest
                    </Text>
                </Button>
                <Divider style={styles.dividor} />
                <Button contentStyle={styles.button} onPress={this.onPressOldest}>
                    <Text style={styles.buttonText}>
                        Oldest
                    </Text>
                </Button>
                <Divider style={styles.dividor} />
                <Button contentStyle={styles.button} onPress={this.onPressFollowed}>
                    <Text style={styles.buttonText}>
                        Followed
                    </Text>
                </Button>
                <Divider style={styles.dividor} />
                <Button contentStyle={styles.button} onPress={this.onPressUnfollowed}>
                    <Text style={styles.buttonText}>
                        Unfollowed
                    </Text>
                </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    menuView: {
        width: '100%'
    },
    buttonText: {
        fontSize:12,
    },
    dividor: {
        alignSelf: 'center',
        width: '85%'
    },
    filterDividor: {
       height: 1.5
    }

  });