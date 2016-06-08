import Ember from 'ember';

function count_live_in_area(board, x,y) {
  var i, j, live_in_area=0;
  for(i=Math.max(x-1,0);i<Math.min(x+2,board.length);i=i+1) {
    for(j=Math.max(y-1,0);j<Math.min(y+2,board[0].length);j=j+1) {
      if(board[i][j].is_alive){
        live_in_area += 1;
      }
    }
  }
  return live_in_area;
}

function live_next_round(board,x,y){
  var live_in_area = count_live_in_area(board,x,y);

  if(board[x][y].is_alive){
    return (live_in_area>2 && live_in_area< 5);
  } else {
    return live_in_area == 3;
  }
}


export default Ember.Component.extend({
  actions: {
    iterateBoard(){
      var board = this.get('board');
      board.forEach(function(element, index, array){
        element.forEach(function(inner_element, inner_index, inner_array){
          inner_element.next_life = live_next_round(board,index,inner_index);
        });
      });
      board.forEach(function(element, index, array){
        element.forEach(function(inner_element, inner_index, inner_array){
          inner_element.set('is_alive', inner_element.next_life);
          delete(inner_element).next_life;
        });
      });
    }
  }
});
