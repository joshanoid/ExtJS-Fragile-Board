Ext.define('Fragile.model.Lane', {
    extend: 'Ext.data.Model',
    fields: ['id', 'parent_id', 'name', 'xlimit', 'xorder'],
    hasMany: [
        {
            model : "Fragile.model.Card",
            name : "cards"
        }
    ]
});