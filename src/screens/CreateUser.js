import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from '../assets/stylesheets/';
import SCREENS from '../constants/screens';
import { signUpUser } from '../api/';

class Login extends Component {
  static navigationOptions = {
    title: 'Sign up',
  };

  state = {
    fullName: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(fullName) => this.setState({fullName})}
          value={this.state.name}
          placeholder="Name"
        />
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
        <Button title="Sign up!" onPress={this.signUp} />
      </View>
    );
  }

  signUp = () => {
    signUpUser(this.state, () => this.props.navigation.navigate(SCREENS.DASHBOARD));
  }
}

export default Login;
