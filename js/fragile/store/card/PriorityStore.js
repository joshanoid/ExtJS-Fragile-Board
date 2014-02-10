Ext.define('Fragile.store.card.PriorityStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.card.Priority",
	storeId: 'cardPriorityStore',
	autoLoad: true,
	autoSync: false,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/cardpriority/read',
            create: 'ajax/cardpriority/create',
            update: 'ajax/cardpriority/update',
            destroy: 'ajax/cardpriority/destroy'
        },
		reader : {
			type : 'json',
			root : 'priorities'
		}
	}
});