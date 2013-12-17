Ext.define('Fragile.controller.Board', {
    extend: 'Ext.app.Controller',
    views: ['lane.Lanes'],
    models : [ "Lane" ],
	stores : [ "LaneStore" ],
    refs: [
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        }
    ],
    index: function(id){
        var store        = this.getStore("LaneStore"),
            proxy        = store.getProxy(),
    	    contentPanel = this.getContentPanel();

        proxy.setExtraParam("projectId", id);
        store.load({
            scope: store,
            callback: function(records, operation, success) {
                contentPanel.removeAll(true);
                contentPanel.add( Ext.create("Fragile.view.lane.Lanes", {
                    lanes: records
                }));
            }
        });    
        
        
    }
});