import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  position: DS.attr('string'),
  office: DS.attr('string'),
  age: DS.attr('number'),
  extension: DS.attr('string'),
  startDate: DS.attr('date'),
  salary: DS.attr('number'),

  name: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
