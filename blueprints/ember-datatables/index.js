module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {
        return this.addBowerPackagesToProject([
            {name: 'datatables.net'},
            {name: 'datatables.net-dt'}
        ]);
    }
}