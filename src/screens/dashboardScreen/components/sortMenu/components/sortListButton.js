import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const SortListButton = props => ( 
                    <Button onPress={props.onPress}>
                        <Text style={styles.buttonText}>
                            {props.text}
                        </Text>
                    </Button>
            );


const styles = StyleSheet.create({
    buttonText: {
        fontSize:12,
    },
  });
