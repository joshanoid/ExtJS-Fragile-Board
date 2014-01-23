Ext.define('Fragile.view.MainView', {
    extend: 'Ext.panel.Panel',    
    layout: 'fit',
    xtype: 'mainview',
    alias: 'widget.fragilemain',
    requires: [
        'Fragile.view.ContentPanel',
        'Fragile.view.FragileHeader',
        'Fragile.view.FragileFooter',
        'Fragile.view.Breadcrumb',
        'Fragile.view.LoginForm',
        'Ext.toolbar.TextItem'
    ],

    dockedItems: [
    	{
            dock: 'top',
            xtype: 'fragileheader',
            height: 80
        },
        {
            dock: 'top',
            xtype : "breadcrumb"
        },
        {
            dock: 'bottom',
            xtype: 'fragilefooter',
            height: 80
        }
    ],

    items: [
        {
        	xtype : "contentPanel"
        }
    ] 
});