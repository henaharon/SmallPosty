import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('storeProfileScreen')@observer
export class TabBarButton extends PureComponent {

    onButtonClick = num => {
        this.props.listController(num)
        this.props.storeProfileScreen.setTabNumSelected(num);
    }

    getGridIcon = () => {
        const { tabNumSelected } = this.props.storeProfileScreen;
        const { tabNum } = this.props; 
        const ColorGridIcon = <Image style={styles.gridIcon} source={require('../../../../../images/color_grid.png')} />;
        const GridIcon = <Image style={styles.gridIcon} source={require('../../../../../images/grid.png')} />;
        return tabNumSelected !== tabNum ? ColorGridIcon : GridIcon;
    }

    render(){

        const { tabNum, tabTitle, icon } = this.props; 
        const { tabNumSelected } = this.props.storeProfileScreen;
        return(
            <TouchableOpacity style={tabNumSelected !== tabNum ? [styles.tabButton, styles.pressedButton] :styles.tabButton } onPress={() => this.onButtonClick(tabNum)}>
                    {!icon ?<Text style={tabNumSelected !== tabNum ? styles.textPressed : styles.text}>
                        {tabTitle}
                    </Text>:
                    this.getGridIcon()}
                </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    textPressed: {
        color: '#09bbbb'
    },
    tabButton: {
      flex: 1,
      borderRadius: 10,
      alignItems: 'center',
        padding: 12,
      backgroundColor: '#09bbbb',
      marginHorizontal: 6,
      elevation : 2
    },
    pressedButton: {
        backgroundColor: 'white',

    },
    gridIcon: {
        height: 20,
        width: 20,
        marginTop: 2
    }
  });