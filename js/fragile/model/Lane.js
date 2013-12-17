Ext.define('Fragile.model.Lane', {
    extend: 'Ext.data.Model',
    requires:[
    	'Ext.data.proxy.Ajax'
    ],
    fields: ['id', 'parent_id', 'name', 'xlimit', 'xorder'],
    hasMany: {
        model: 'Fragile.model.Lane',
        name : 'laneParent',
        associationKey : "parent_id"
    }
});