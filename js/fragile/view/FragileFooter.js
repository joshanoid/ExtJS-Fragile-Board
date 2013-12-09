Ext.define('Fragile.view.FragileFooter', {
    extend: 'Ext.Component',
    alias: 'widget.fragilefooter',
    dock: 'bottom',
    baseCls: 'fragile-footer',
    
    initComponent: function() {
        Ext.applyIf(this, {
            html: '@ FRAgile Team 2013'
        });
                
        this.callParent(arguments);
    }
});