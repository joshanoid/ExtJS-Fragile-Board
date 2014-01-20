Ext.define('Fragile.store.CardStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.Card",
	autoLoad: false,
	autoSync: false,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/card/read',
            create: 'ajax/card/create',
            update: 'ajax/card/update',
            destroy: 'ajax/card/destroy'
        },
		reader : {
			type : 'json',
			root : 'cards'
		}
	}
});