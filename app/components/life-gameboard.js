import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleLiving(cell){
      cell.set('is_living',!cell.get('is_living'));
      console.log(cell.get('is_living'));
    },
    iterateBoard(){
      this.board.forEach(function(element, index, array){
        next_board[index] = new Array($scope.max_x);
        element.forEach(function(inner_element, inner_index, inner_array){
          next_board[index][inner_index] = {is_alive:live_next_round(index,inner_index)};
        });
      });
      $scope.board = next_board;
      steps -= 1;
      if(steps==0){
        $scope.promise==null
      } else {
        $scope.promise = $timeout($scope.iterateState,delay,true,steps,delay)
      }
    }
  }
  // rows:,
  // columns:,
  // density:,
});


/* $scope.iterateState = function(steps,delay){
    if(steps>0){
      var next_board = new Array($scope.max_y);
      $scope.board.forEach(function(element, index, array){
        next_board[index] = new Array($scope.max_x);
        element.forEach(function(inner_element, inner_index, inner_array){
          next_board[index][inner_index] = {is_alive:live_next_round(index,inner_index)};
        });
      });
      $scope.board = next_board;
      steps -= 1;
      if(steps==0){
        $scope.promise==null
      } else {
        $scope.promise = $timeout($scope.iterateState,delay,true,steps,delay)
      }
    } else {
      $scope.promise==null
    }
  }

  function count_live_neighbors(x,y) {
    var i, j, live_neighbors=0;
    for(i=max(x-1,0);i<min(x+2,$scope.max_y);i=i+1) {
      for(j=max(y-1,0);j<min(y+2,$scope.max_x);j=j+1) {
        if($scope.board[i][j].is_alive && (i!=x || j!=y)){
          live_neighbors += 1;
        }
      }
    }
    return live_neighbors;
  }

  function live_next_round(x,y){
    var live_neighbors = count_live_neighbors(x,y);

    if($scope.board[x][y].is_alive){
      return (live_neighbors>1 && live_neighbors< 4);
    } else {
      return live_neighbors == 3;
    }
  }

  function max (a,b) { return a>b?a:b;}
  function min (a,b) { return a>b?b:a;}
*/
