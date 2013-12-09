Ext.define('Fragile.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    requires: [
        'Fragile.view.FragileHeader',
        'Fragile.view.FragileFooter',
        'Fragile.view.LoginForm',
        'Ext.grid.*',
    ],
    beforeRender: function(){
        if(user){
            Ext.require('Fragile.view.Projects', function(){
                var contentpanel = Ext.getCmp("content_panel");
                contentpanel.removeAll();
                contentpanel.add({
                    xtype : "fragileprojects"
                });
            });
        }else{
            Ext.widget("loginform");
        }
    },
    initComponent: function() {
        var me = this;
        
        this.items = {
            dockedItems: [
	            {
	                dock: 'top',
	                xtype: 'fragileheader',
	                height: 80
	            },
	            {
	            	dock: 'bottom',
	                xtype: 'fragilefooter',
	                height: 80
	            }
            ],
            items: [
                {
                    region : "center",
                    id : "content_panel",
                    xtype : "panel",
                    layout : "fit",
                    defaults : {
                        margin : 5,
                        padding : 5
                    },
                    border : false
                }
            ]
    
        }
                
        me.callParent(arguments);
    } 
});