import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from '../assets/stylesheets';
import { addGame } from '../api';

class AddGame extends Component {
  static navigationOptions = {
    title: 'Add game',
  };

  state = {
    opponentName:'',
    score: {
      set1:[2,6],
      set2:[5,2]
    }, 
    address: '',
    lat: null,
    long: null,
  }

  handleFormSubmit = () => {
    addGame(
      this.state,
      () => {
        const { navigation } = this.props;
        const callback = navigation.state.params.refresh;
        if (typeof callback === 'function') {
          callback();
        }
        navigation.goBack()
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(opponentName) => this.setState({opponentName})}
          value={this.state.email}
          placeholder="Opponent Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(address) => this.setState({address})}
          value={this.state.address}
          placeholder="Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(lat) => this.setState({lat})}
          value={this.state.lat}
          placeholder="Latitude"
        />
        <TextInput
          style={styles.input}
          onChangeText={(long) => this.setState({long})}
          value={this.state.long}
          placeholder="Longitude"
        />
         <Button title="Submit" onPress={this.handleFormSubmit}></Button>
      </View>
    );
  }
}

export default AddGame;
