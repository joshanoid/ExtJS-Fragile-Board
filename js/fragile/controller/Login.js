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
                    Fragile.settings.loggedIn = action.result.user;
                    if(Fragile.settings.originalRoute !== "#!/login")
                        window.location.hash = Fragile.settings.originalRoute;
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
                Fragile.settings.loggedIn = false;
                button.destroy();
                window.location.hash = "#!/login";
            },
            failure : function(response, opts) {
                Ext.Msg.alert('Logout Failed (' + response.status + ')');
            }
        });

    }
});


