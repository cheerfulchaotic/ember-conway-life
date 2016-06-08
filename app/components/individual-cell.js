import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':cell','is_alive:alive:dead'],
  click(){
    this.set('is_alive', !this.get('is_alive'));
  }
});
