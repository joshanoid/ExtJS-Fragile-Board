Ext.define('Fragile.model.Card', {
    extend: 'Ext.data.Model',
    requires:[
    	'Ext.data.proxy.Ajax'
    ],
    fields: ['id', 'user_name', 'title', 'color']
});