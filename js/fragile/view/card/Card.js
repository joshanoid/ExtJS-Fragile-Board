Ext.define('Fragile.view.card.Card', {
    extend: 'Ext.Container',
    alias: 'widget.card',
    border: true,
    width: 185,
    cls: 'x-card-panel',
    cardId: false,

    initComponent: function(){
        this.cardId = this.data.id;
        this.callParent(arguments);
    },
    
    afterRender: function(){
        this.callParent(arguments);
        
        var dd = Ext.create('Ext.dd.DragSource', this.el, {
            group: 'cards'
        });
    },

    tpl: [
        '<div class="x-card-toolbar" style="background-color: {color}; color: {textcolor}">',
            '<div class="x-card-settings">&nbsp;</div>',
            '<div class="x-card-author">{user_name}</div>',
            '<div class="x-card-id">#{id}</div>',
        '</div>',
        '<div class="x-card-content-container">',
            '<div class="x-card-content">{title}</div>',
        '</div>'
    ]
});