import Ember from 'ember';
import layout from '../templates/components/data-table';

export default Ember.Component.extend({
  layout,

  tagName: 'table',

  data: null,
  columns: null,
  columnDefs: null,

  autoWidth: null,
  deferRender: null,
  info: null,
  jQueryUI: null,
  lengthChange: null,
  order: null,
  ordering: null,
  paging: null,
  processing: null,
  scrollX: null,
  scrollY: null,
  searching: null,
  serverSide: null,
  stateSave: null,

  didInsertElement() {
    let options = {};

    let models = this.get('data');
    if (null !== models) {
      options.ajax = function(data, callback) {
        callback({data: models.toArray()});
      };
    }

    let columns = this.get('columns');
    function getColumnValue(row, type, set, meta) {
      return row.get(columns[meta.col].property);
    }

    if (null !== columns) {
      for (let column of columns) {
        column.data = getColumnValue;
      }

      options.columns = columns;
    }

    let setOption = (name) => {
      let value = this.get(name);
      if (null !== value) {
        options[name] = value;
      }
    };
    setOption('autoWidth');
    setOption('columnDefs');
    setOption('deferRender');
    setOption('info');
    setOption('jQueryUI');
    setOption('lengthChange');
    setOption('order');
    setOption('ordering');
    setOption('paging');
    setOption('processing');
    setOption('scrollX');
    setOption('scrollY');
    setOption('searching');
    setOption('serverSide');
    setOption('stateSave');
    
    this.$().DataTable(options);
  }
});
