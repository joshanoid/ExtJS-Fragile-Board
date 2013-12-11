Ext.define('Fragile.store.ProjectStore', {
	extend: "Ext.data.Store",
	model: "Fragile.model.Project",

	proxy : {
		type : 'ajax',
		url : 'project',
		reader : {
			type : 'json',
			root : 'results'
		}
	}


	// proxy: {
 //            type: 'jsonp',            
 //            api: {
 //                read: 'app.php/users/view',
 //                create: 'app.php/users/create',
 //                update: 'app.php/users/update',
 //                destroy: 'app.php/users/destroy'
 //            },
 //            reader: {
 //                type: 'json',
 //                successProperty: 'success',
 //                root: 'data',
 //                messageProperty: 'message'
 //            },
 //            writer: {
 //                type: 'json',
 //                encode: true,
 //                writeAllFields: false,
 //                root: 'data'
 //            },
 //            listeners: {
 //                exception: function(proxy, response, operation){
 //                    Ext.MessageBox.show({
 //                        title: 'REMOTE EXCEPTION',
 //                        msg: operation.getError(),
 //                        icon: Ext.MessageBox.ERROR,
 //                        buttons: Ext.Msg.OK
 //                    });
 //                }
 //            }
 //        },
});