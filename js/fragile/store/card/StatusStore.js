Ext.define('Fragile.store.card.StatusStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.card.Status",
	storeId: 'cardStatusStore',
	autoLoad: true,
	autoSync: false,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/cardstatus/read',
            create: 'ajax/cardstatus/create',
            update: 'ajax/cardstatus/update',
            destroy: 'ajax/cardstatus/destroy'
        },
		reader : {
			type : 'json',
			root : 'statuses'
		}
	}
});