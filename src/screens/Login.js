import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import SCREENS from '../constants/screens';
import styles from '../assets/stylesheets';
import { signInUser } from '../api/';

class Login extends Component {
  static navigationOptions = {
    title: 'Log in',
  };

  state = {
    password: '',
    email: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true} 
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password"
        />
        <Button style={styles.button} title="Sign in" onPress={this.signIn} />
        <Button style={styles.button} title="Sign up" onPress={this.signUp} />
      </View>
    );
  }

  signUp = () => {
    this.props.navigation.navigate(SCREENS.CREATE_USER);
  }

  signIn = () => {
    signInUser(this.state, () => this.props.navigation.navigate(SCREENS.DASHBOARD));
  }
}

export default Login;
