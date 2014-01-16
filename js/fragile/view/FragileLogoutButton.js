Ext.define('Fragile.view.FragileLogoutButton', {
    extend: 'Ext.Button',
    text: 'Hi <strong>' + Fragile.settings.loggedIn.username + '</strong>, you can logout here!',
    xtype: 'fragilelogout',
    style: {
        float: 'right',
        'margin-top': '10px'
    }
});