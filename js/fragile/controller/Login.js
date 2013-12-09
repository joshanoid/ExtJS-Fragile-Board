Ext.define('Fragile.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.util.History'],
    views: ['LoginForm'],
    
    init: function(application) {
        this.control({
            "loginform": {
                login: this.loginHandler
            }
        });
    },

    loginHandler: function(loginDialog, loginForm) {
    	if (loginForm.isValid()) {
            loginForm.submit({
                success: function(form, action) {
                   // Ext.Msg.alert('Success', action.result.msg);
                   Ext.util.History.add('main');
                   loginDialog.destroy();
                   
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        }
    }
});


