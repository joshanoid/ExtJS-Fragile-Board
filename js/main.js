Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Fragile',
    autoCreateViewport: true,
    appFolder: 'js/fragile',
    controllers: [
        user ? "Main" : "Login"      
    ],
    views: [
        
    ]
});