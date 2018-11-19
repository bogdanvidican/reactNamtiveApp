import React, { Component } from 'react';
import { AsyncStorage, StatusBar, Button, View, Text } from 'react-native';
import styles from '../assets/stylesheets';
import SCREENS from '../constants/screens';

class Account extends Component {
  static navigationOptions = {
    title: 'Account',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Account Info!</Text>
        <Button title="Sign out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate(SCREENS.AUTH);
  };
}

/* 
 * hack to force header to be present on this screen;
 * @todo - implement a better solution for this
 */
export default Account;
