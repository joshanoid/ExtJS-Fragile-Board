Ext.define('Fragile.model.Lane', {
    extend: 'Ext.data.Model',
    requires:[
    	'Ext.data.proxy.Ajax'
    ],
    fields: ['id', 'parent_id', 'name', 'xlimit', 'xorder'],
    hasMany: [
        {
            model: 'Fragile.model.Lane',
            name : 'getParent',
            associationKey : "parent_id"
        },
        {

            model : "Fragile.model.Card",
            name : "getCards",
            associationKey : "cards"
        }
    ]
});