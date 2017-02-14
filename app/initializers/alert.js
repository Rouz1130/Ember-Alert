import Ember from 'ember';

var AlertsInterface = Ember.ArrayProxy.extend({
  content: Ember.A(),
  timeout: 5000,
  pushObject: function(object) {
    object.typeClass = 'alert-' + object.type;
    this._super(object);
  },
  danger: function(message, prefix) {
    this.pushObject({
      type: 'danger',
      text: message,
      prefix: prefix
    });
  },
  warning: function(message, prefix) {
    this.pushObject({
      type: 'warning',
      text: message,
      prefix: prefix
    });
  },
  info: function(message, prefix) {
    this.pushObject({
      type: 'info',
      text: message,
      prefix: prefix
    });
  },
  success: function(message, prefix) {
    this.pushObject({
      type: 'success',
      text: message,
      prefix: prefix
    });
  }
});

export default {
  name:       'alerts',
  initialize: function(container, app) {
    // Register the alerts interface
    container.register('alerts:app', AlertsInterface);

    // Inject the alerts property into the application
    app.inject('controller', 'alerts', 'alerts:app');
    app.inject('component', 'alerts', 'alerts:app');
    app.inject('route', 'alerts', 'alerts:app');
  }
};
