Ext.define('Fragile.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.util.History'],
    views: ['LoginForm', 'FragileHeader', 'Breadcrumb', 'FragileLogoutButton'],
    refs: [
        {
            ref: 'fragileheader',
            selector: 'fragileheader'
        },
        {
            ref: 'bc',
            selector: 'breadcrumb'
        }
    ],
    init: function(application) {
        this.control({
            '#fragile-login': {
                click: this.login
            },
            'fragilelogout': {
                click: this.logout
            }
        });
    },
    index: function(){
        Ext.widget("loginform");
        this.getBc().clear(); 
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
                    else
                        window.location.hash = "#!/projects";
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Login Failed', action.result.msg);
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
                Ext.Msg.alert('Logout Failed', response.status);
            }
        });
    },

    addLogout: function(){
        var me = this,
            fh = me.getFragileheader(),
            lo = fh.query();

        if( !lo.length ){
            fh.add({
                xtype: 'fragilelogout'
            });
        }
    }
});


