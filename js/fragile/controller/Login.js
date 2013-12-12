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
    	var me = this;

        if (loginForm.isValid()) {
            loginForm.submit({
                success: function(form, action) {
                   loginDialog.destroy();
                   me.getController('Project').index();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        }
    }
});


