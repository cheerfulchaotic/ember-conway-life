import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create_board(){
      var rows = this.get('rows');
      var columns = this.get('columns');
      var gameBoard = new Array(rows);
      for(var i=0; i<rows; i++){
        gameBoard[i]= new Array(columns);
        for(var j=0; j<columns; j++){
          gameBoard[i][j] = {is_alive: Math.random()<this.get('density')};
        }
      }
      this.set('board',gameBoard)
    },
    clear_board(){
      var gameBoard = new Array(rows);
      for(var i=0; i<rows; i++){
        gameBoard[i]= new Array(columns);
      }
    }
  }
});
