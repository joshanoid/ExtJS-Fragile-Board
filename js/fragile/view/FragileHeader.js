Ext.define('Fragile.view.FragileHeader', {
    extend: 'Ext.container.Container',
    alias: 'widget.fragileheader',
    dock: 'top',
    baseCls: 'fragile-header',
    initComponent: function() {
        Ext.applyIf(this, {
            html: 'FRAgile Board'
        });
                
        this.callParent(arguments);
    }
});