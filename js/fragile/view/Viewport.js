Ext.define('Fragile.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    requires: [
        'Fragile.view.MainView'
    ],
    items: [
        {
            xtype: 'fragilemain'
        }
    ] 
});