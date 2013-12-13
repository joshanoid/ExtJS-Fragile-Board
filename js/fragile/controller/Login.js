Ext.define('Fragile.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.util.History'],
    views: ['LoginForm'],
    refs: [
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        }
    ],
    init: function(application) {
        this.control({
            "#fragile-login": {
                click: this.login
            },
            "#fragile-logout": {
                click: this.logout
            }
        });
    },

    login: function(button) {
        var me          = this,
            loginForm   = button.up('form'),
            loginDialog = button.up('loginform');

        if (loginForm.isValid()) {
            loginForm.submit({
                success: function(form, action) {
                    loginDialog.destroy();
                    Fragile.app.loggedIn = action.result.user;
                    me.getController('Project').index();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        }
    },

    logout: function(button){
        Ext.Ajax.request({
            url : 'ajax/logout',
            success : function(response, opts) {
                Fragile.app.loggedIn = false;
                var contentPanel = this.getContentPanel();
                contentPanel.removeAll(true);
                Ext.widget("loginform");
                button.destroy();
            },
            failure : function(response, opts) {
                Ext.Msg.alert('Logout Failed (' + response.status + ')');
            }
        });

    }
});


