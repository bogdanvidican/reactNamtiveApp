export default class GameModel {
  constructor(game) {
    this.id = game.id;
    this.opponent_name = game.opponent_name;
    this.score = game.score;
    this.address = game.address;
    this.lat = game.lat;
    this.long = game.long;
  }
}
