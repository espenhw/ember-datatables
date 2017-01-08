/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-datatables',

  included: function(app) {
    this._super.included.apply(this, arguments);

    function addBowerImport(path, productionPath) {
      let importPath = 'production' == app.environment && productionPath ? productionPath : path;
      app.import(app.bowerDirectory + importPath);
    }

    addBowerImport(
      '/datatables.net/js/jquery.dataTables.js',
      '/datatables.net/js/jquery.dataTables.min.js'
    );
    app.import(app.bowerDirectory + '/datatables.net-plugins/dataRender/datetime.js');
    
    addBowerImport(
      '/datatables.net-dt/css/jquery.dataTables.css',
      '/datatables.net-dt/css/jquery.dataTables.min.css'
    );

    let destDir = {destDir: 'images'};
    app.import(app.bowerDirectory + '/datatables.net-dt/images/sort_asc.png', destDir);
    app.import(app.bowerDirectory + '/datatables.net-dt/images/sort_asc_disabled.png', destDir);
    app.import(app.bowerDirectory + '/datatables.net-dt/images/sort_both.png', destDir);
    app.import(app.bowerDirectory + '/datatables.net-dt/images/sort_desc.png', destDir);
    app.import(app.bowerDirectory + '/datatables.net-dt/images/sort_desc_disabled.png', destDir);
  }
};
