import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleLiving(cell){
      cell.set('is_living',!cell.get('is_living'));
      console.log(cell.is_living?'alive':'dead');
    }
  }
});
