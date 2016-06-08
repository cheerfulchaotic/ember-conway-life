import Ember from 'ember';

var initGameState = {
  options: {
    steps: 100,
    delay: 250,
    rows: 50,
    columns: 50,
    density: 0.4
  }
};

var gameBoard = Array(50);

for(var i=0; i<initGameState.options.rows; i++){
	gameBoard[i]= new Array(50);
	for(var j=0; j<initGameState.options.columns; j++){
		gameBoard[i][j] = Ember.Object.create({is_alive: Math.random()<0.375});
	}
}

initGameState.board = gameBoard;

export default Ember.Route.extend({
  model(){
    return initGameState;
  }
});
