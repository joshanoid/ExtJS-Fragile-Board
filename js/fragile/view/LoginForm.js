Ext.define("Fragile.view.LoginForm", {
	extend: 'Ext.window.Window',
	alias: 'widget.loginform',
	requires: ['Ext.form.Panel'],
	title: 'Please Log In',
    autoShow: true,
	height: 150,
	width: 300,
    closable: false,
    resizable: false,
	layout: 'fit',
    items: [
    {
        xtype: 'form',
        bodyPadding: 5,
        layout: 'anchor',
        url: 'ajax/login',
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [
            {
          	    fieldLabel: 'User Name:',
          	    name: 'username',
          	    allowBlank: false
            },
            {
              	fieldLabel: 'Password:',
                inputType: 'password',
              	name: 'password',
              	allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Reset',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            },
 		    {
 		        text: 'Log in',
 		        formBind: true,
 		        disabled: true,
 		        handler: function() {
                    var dialog  = this.up('loginform'),
                        form    = this.up('form');

                    dialog.fireEvent('login', dialog, form.getForm());
                }
 		   }
        ]
    }]
});