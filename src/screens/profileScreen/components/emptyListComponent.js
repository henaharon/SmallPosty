import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const EmptyListComponent = props => (
                    <View style={styles.msg}>
                        <Text>{props.msg}</Text>
                     </View>
)

const styles = StyleSheet.create({
    msg: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });