Ext.define('Fragile.store.ProjectStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.Project",
	autoLoad: true,
	autoSync: true,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/project/read',
            create: 'ajax/project/create',
            update: 'ajax/project/update',
            destroy: 'ajax/project/destroy'
        },
		reader : {
			type : 'json',
			root : 'projects'
		},
		writer: {
            type: 'json',
            encode: true,
            writeAllFields: false,
            root: 'data'
        }
	}
});