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
        url: 'save-form.php',
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
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            success: function(form, action) {
                               Ext.Msg.alert('Success', action.result.msg);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                            }
                        });
                    }
                }
 		   }
        ]
    }]
});
/*
Ext.define('Fragile.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    title: 'Simple Form',
    bodyPadding: 5,
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                       Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }],
    renderTo: Ext.getBody()
});
*/
