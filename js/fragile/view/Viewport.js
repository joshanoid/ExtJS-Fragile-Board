Ext.define('Fragile.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'card',
    requires: [
        'Ext.layout.container.Card',
        'Fragile.view.ContentPanel',
        'Fragile.view.FragileHeader',
        'Fragile.view.FragileFooter',
        'Fragile.view.Breadcrumb',
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
                    xtype : "breadcrumb"
                },
                {
                    region : "center",
                    xtype : "contentPanel"
                }
            ]    
        }
                
        me.callParent();
    } 
});