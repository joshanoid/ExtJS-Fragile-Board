Ext.define('Fragile.store.card.TypeStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.card.Type",
	storeId: 'cardTypeStore',
	autoLoad: true,
	autoSync: false,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/cardtype/read',
            create: 'ajax/cardtype/create',
            update: 'ajax/cardtype/update',
            destroy: 'ajax/cardtype/destroy'
        },
		reader : {
			type : 'json',
			root : 'types'
		}
	}
});