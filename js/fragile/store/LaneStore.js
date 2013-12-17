Ext.define('Fragile.store.LaneStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.Lane",
	autoLoad: false,
	autoSync: true,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/lane/read',
            create: 'ajax/lane/create',
            update: 'ajax/lane/update',
            destroy: 'ajax/lane/destroy'
        },
		reader : {
			type : 'json',
			root : 'lanes'
		},
		writer: {
            type: 'json',
            encode: true,
            writeAllFields: false,
            root: 'data'
        },
        extraParams: {  
		    'projectId': true  
		}  
	}
});