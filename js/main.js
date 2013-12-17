Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true
});

Ext.setGlyphFontFamily('Pictos');

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Fragile',
    appProperty: 'Fragile',
    autoCreateViewport: true,
    appFolder: 'js/fragile',
    controllers: [
        "Login", "Project", "Board"      
    ],
    views: [
        
    ],
    launch: function(){
        var me = this;

        if(Fragile.app.loggedIn){
            Ext.Loader.injectScriptElement('https://raw.github.com/mtrpcic/pathjs/master/path.min.js', function() {
                Path.map("#!/projects").to(function() {
                    me.getController('Project').index();
                });
                Path.map("#!/projects/:id").to(function() {
                    me.getController('Board').index(this.params["id"]);
                });
     
                Path.root('#!/projects');
                Path.listen();
            }, null, this);
        }else{
            Ext.widget("loginform");
        }
    },
    init: function(){
        Ext.setGlyphFontFamily('Pictos'); 
    }
});