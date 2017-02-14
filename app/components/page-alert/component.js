import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['alerts-container'],
  classNameBindings: ['insertState'],
  insertState: 'pre-insert',
  didInsertElement: function() {
    var self = this;
    self.$().bind('webkitTransitionEnd', function() {
      if (self.get('insertState') === 'destroyed') {
        self.alerts.removeObject(self.get('message'));
      }
    });
    Ember.run.later(function() {
      self.set('insertState', 'inserted');
    }, 250);

    // Check for a timeout to remove automatically
    if (self.alerts.timeout) {
      Ember.run.later(function() {
        self.set('insertState', 'destroyed');
      }, self.alerts.timeout);
    }
  },

  click: function() {
    this.set('insertState', 'destroyed');
  }
});
