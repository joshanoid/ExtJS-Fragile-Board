Ext.define('Fragile.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'card',
    requires: [
        'Fragile.view.FragileHeader',
        'Fragile.view.FragileFooter',
        'Fragile.view.LoginForm'
    ],
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
                    id : "content-panel",
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