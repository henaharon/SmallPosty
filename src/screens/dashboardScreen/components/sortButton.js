import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { inject, observer } from 'mobx-react';
import { SortMenu } from './sortMenu/sortMenu';

@inject('storeDashboardScreen')@observer
export class SortButton extends PureComponent {
    openMenu = () => {
        const { isSortMenuOpen } = this.props.storeDashboardScreen; 
        this.props.storeDashboardScreen.setIsSortMenuOpen(!isSortMenuOpen);
      }
    render(){
        const { isSortMenuOpen, sortMethod } = this.props.storeDashboardScreen;
        return(
                <View>
                    <Button style={styles.button} onPress={this.openMenu}>
                        <Text style={styles.buttonText}>Sort by : {sortMethod}</Text>
                    </Button>
                    {isSortMenuOpen ? <SortMenu /> : null}
                </View>
            );
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize:12,
    }
  });
