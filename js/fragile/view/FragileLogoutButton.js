Ext.define('Fragile.view.FragileLogoutButton', {
    extend: 'Ext.Button',
    xtype: 'fragilelogout',
    style: {
        float: 'right',
        'margin-top': '10px'
    },
    initComponent: function() {
    	this.text = 'Hi <strong>' + Fragile.settings.loggedIn.username + '</strong>, you can logout here!'; 
        this.callParent(arguments);
    }
});