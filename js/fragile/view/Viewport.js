Ext.define('Fragile.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    requires: [
        'Fragile.view.FragileHeader',
        'Fragile.view.FragileFooter',
        'Fragile.view.LoginForm'
    ],
    beforeRender: function(){
    	Ext.widget( user ? "Fragile.view.Blah" : "loginform");
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
            layout: {
                // type: 'hbox',
                // align: 'stretch'
            }
        }
                
        me.callParent(arguments);
    } 
});