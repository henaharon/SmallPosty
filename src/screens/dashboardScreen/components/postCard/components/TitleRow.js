import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation'

export const TitleRow = props => (
        <View style={styles.titleRow}>
            {props.isMyPost ?   <TouchableOpacity onPress={props.onPress}>
                                    <Icon style={styles.delete} name="page-delete" size={25} color="#7f7f7d" />
                                </TouchableOpacity> 
                                : 
                                <View style={styles.smallView} />}
            <View style={styles.titleView}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
  );

  const styles = StyleSheet.create({
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 9,
        paddingBottom: 9,
        paddingRight: 15,
        paddingLeft: 15,
        alignItems: 'center',
        borderBottomWidth: 0.8,
        borderBottomColor:'#dfe0e0'
    },
    titleView: {
        width: '90%'
    },
    title: {
        color: 'black',
        fontSize: 15,
    },
    delete: {
        paddingRight: 5,
    },
    smallView : {
        width: 25,
        height: 25
    }
  });


