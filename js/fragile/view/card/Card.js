Ext.define('Fragile.view.card.Card', {
    extend: 'Ext.Component',
    alias: 'widget.card',
    border: true,
    width: 185,
    cls: 'x-card-panel',
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