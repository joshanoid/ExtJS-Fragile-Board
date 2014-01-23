Ext.define('Fragile.model.card.CardSettings', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id',    		type: 'int' },
        { name: 'title',  		type: 'string' }, 
        { name: 'description',  type: 'string' }, 
        { name: 'type_id',  	type: 'int' }, 
        { name: 'status_id',  	type: 'int' }, 
        { name: 'priority_id',  type: 'int' }, 
        { name: 'color',  		type: 'string' }
    ],

    proxy: {
    	type: 'ajax',
		api: {
            read: 'ajax/card/read_setting',
            create: 'ajax/blahh/create',
            update: 'ajax/blahh/update',
            destroy: 'ajax/blahh/destroy'
        },
		reader : {
			type : 'json',
			root : 'setting'
		}
    }
});