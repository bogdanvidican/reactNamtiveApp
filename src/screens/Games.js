import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../assets/stylesheets';
import SCREENS from '../constants/screens';
import { getGames } from '../api';
import GameModel from '../models/Game';

class Games extends Component {
  static navigationOptions = {
    title: 'Games',
  };

  state = {
    games: []
  }

  componentWillMount() {
    this.refetchGames();
  }

  refetchGames = () => {
    getGames()
      .then(games => {
        const newGames = games.rows.map(game => new GameModel(game));
        this.setState({ games: newGames })
      });
  }

  renderGames = () => {
    return this.state.games.map((game, i) => (
      <View key={`key_${i}`}>
        <Text>{`${game.id}`}</Text>
        <Text>{`${game.opponent_name} \n`}</Text>
      </View>
    ))
  }

  handleAddGamePress = () => {
    this.props.navigation.navigate(SCREENS.ADDGAME, { refresh: this.refetchGames })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.games && this.state.games.length ?
            this.renderGames() :
            <Text>No Games!</Text>
        }
        <Button title="Add Game" onPress={this.handleAddGamePress}></Button>
      </View>
    );
  }
}

export default Games;
