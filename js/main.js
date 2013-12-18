Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true
});

Ext.application({
    requires: ['Ext.container.Viewport'],
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
            if(!Fragile.settings.loggedIn){
                window.location.hash = "#!/login";
            }

            Path.map("#!/login").to(function(){
                me.showLogin();
            });
            Path.map("#!/projects").to(function() {
                me.getController('Project').index();
            });
            Path.map("#!/projects/:id").to(function() {
                me.getController('Board').index(this.params["id"]);
            });

            Path.root('#!/projects');
            Path.rescue( this.rescuePath );
            Path.listen();
        }, null, this);
    },
    showLogin: function(){
        if(Fragile.settings.loggedIn){
            window.location.hash = "#!/projects";
        }else{
            Ext.widget("loginform");    
        }
    },
    rescuePath: function(){
        window.location.hash = "#!/" + (!Fragile.settings.loggedIn ? "login" : "projects"); 
    },
    init: function(){
        Ext.setGlyphFontFamily('Pictos'); 
    }
});