Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true
});

Ext.application({
    requires: ['Ext.container.Viewport', 'Ext.util.Point'],
    name: 'Fragile',
    appProperty: 'Fragile',
    autoCreateViewport: true,
    appFolder: 'js/fragile',
    controllers: [
        "Login", "Project", "Board"      
    ],
    launch: function(){
        var me = this;

        Ext.Loader.injectScriptElement('js/path.min.js', function() {
            Path.map("#!/login").to(function(){
                if( !me.checkLogin() ) me.getController('Login').index();
                else window.location.hash = "#!/projects";
            });
            Path.map("#!/projects").to(function() {
                if( me.checkLogin() ) me.getController('Project').index();
            });
            Path.map("#!/projects/:id").to(function() {
                if( me.checkLogin() ) me.getController('Board').index(this.params["id"]);
            });

            Path.root('#!/projects');
            Path.rescue( this.rescuePath );
            Path.listen();
        }, null, this);
    },
    checkLogin: function(){
        if(Fragile.settings.loggedIn){
            this.getController('Login').addLogout();
        }else{
            window.location.hash = "#!/login"; 
        }

        return !!Fragile.settings.loggedIn;
    },
    rescuePath: function(){
        window.location.hash = "#!/" + (!Fragile.settings.loggedIn ? "login" : "projects"); 
    },
    init: function(){
        Ext.setGlyphFontFamily('Pictos'); 
    }
});