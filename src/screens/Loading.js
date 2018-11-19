import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import styles from '../assets/stylesheets';
import { getUserTokenFromStorage } from '../api/utils';
import SCREENS from '../constants/screens'

class Loading extends Component {
  componentWillMount() {
    this.checkForLoggedUser();
  }

  checkForLoggedUser = async () => {
    const userToken = await getUserTokenFromStorage();
    this.props.navigation.navigate(userToken ? SCREENS.DASHBOARD : SCREENS.AUTH);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default Loading;
