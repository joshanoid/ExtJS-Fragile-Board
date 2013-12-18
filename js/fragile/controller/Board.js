Ext.define('Fragile.controller.Board', {
    extend: 'Ext.app.Controller',
    views: ['lane.Lanes', 'Breadcrumb'],
    models : [ "Lane" ],
	stores : [ "ProjectStore", "LaneStore" ],
    refs: [
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        },
        {
            ref: 'bc',
            selector: 'breadcrumb'
        }
    ],
    projectsLoaded: false,
    index: function(id){
        var me           = this,
            store        = this.getStore("LaneStore"),
            pStore       = this.getStore("ProjectStore"),
            proxy        = store.getProxy(),
    	    contentPanel = this.getContentPanel();

        proxy.setExtraParam("projectId", id);
        store.load({
            scope: store,
            callback: function(records, operation, success) {
                contentPanel.removeAll(false);
                contentPanel.add( Ext.create("Fragile.view.lane.Lanes", {
                    lanes: records
                }));
            }
        });   

        pStore.on("load", function(store, records, successful, eOpts ){
            me.generateBreadcrumb(id);
            me.projectsLoaded = true;
        });

        if(!pStore.isLoading()) me.generateBreadcrumb(id);
    },
    generateBreadcrumb: function(pid){
        this.getBc().fireEvent("build", [
            {
                'url': "#!/projects",
                'name': "Projects List"
            },
            {
                'url': "#!/projects/"+pid,
                'name': this.getStore("ProjectStore").findRecord('id', pid).data.name
            }
        ]);    
    }
});