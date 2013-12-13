Ext.define('Fragile.view.FragileHeader', {
    extend: 'Ext.container.Container',
    alias: 'widget.fragileheader',
    dock: 'top',
    baseCls: 'fragile-header',
    html: 'FRAgile Board',
    layout: {
        type: 'anchor'
    },
    initComponent: function() {
        this.callParent(arguments);
    }
});