var user = 0;

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