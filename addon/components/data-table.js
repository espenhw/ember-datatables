import Ember from 'ember';
import layout from '../templates/components/data-table';

export default Ember.Component.extend({
  layout,

  tagName: 'table',

  didInsertElement() {
    this.$().DataTable();
  }
});
