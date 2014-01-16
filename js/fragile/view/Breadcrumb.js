Ext.define('Fragile.view.Breadcrumb', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'breadcrumb',
    id: 'fragile-breadcrumb',
    border: false,
    defaults: {
    	xtype: 'tbtext'
    },
    items: [
    	{
    		'text': 'Home'
    	}
    ],
    build: function(parts){
        //Remove existed parts but leave the main part
        this.clear();
        
        //Then add new parts
        for(var i in parts){
            this.add(">>");
            this.add('<a href="' + parts[i].url + '">' + parts[i].name + '</a>');
        }
    },
    clear: function(){
        for(var ind = this.items.length - 1; ind >= 1; ind--)
            this.remove( this.items.items[ind] );
    }
});