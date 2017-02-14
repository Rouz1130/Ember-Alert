// app/components/alert-list.js
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'alert-messages',
  messages: Ember.computed.alias('alerts')
});
