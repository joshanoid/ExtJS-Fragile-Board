Ext.define('Fragile.store.CardStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.Card",
	autoLoad: false,
	autoSync: false,
	proxy : {
		type : 'ajax',
		api: {
            read: 'ajax/card/read'
        },
		reader : {
			type : 'json',
			root : 'cards'
		},
        extraParams: {  
		    'projectId': true  
		}  
	}
});