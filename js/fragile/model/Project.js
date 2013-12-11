Ext.define('Fragile.model.Project', {
    extend: 'Ext.data.Model',
    requires:[
    	'Ext.data.proxy.Ajax'
    ],
    fields: ['id', 'name']
});