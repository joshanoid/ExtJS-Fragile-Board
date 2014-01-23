Ext.define('Fragile.controller.Board', {
    extend: 'Ext.app.Controller',
    views: ['lane.Lanes', 'Breadcrumb', 'card.Settings'],
    models : [ "Lane", "Card", "card.CardSettings" ],
	stores : [ "ProjectStore", "LaneStore", "card.TypeStore" ],
    refs: [
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        },
        {
            ref: 'bc',
            selector: 'breadcrumb'
        },
        {
            ref: 'card',
            selector: 'card'
        }
    ],
    init: function(application) {
        this.control({
            "card": {
                render: this.cardRender
            }
        });
    },
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
        });

        if(!pStore.isLoading()) me.generateBreadcrumb(id);
    },
    generateBreadcrumb: function(pid){
        this.getBc().build([
            {
                'url': "#!/projects",
                'name': "Projects List"
            },
            {
                'url': "#!/projects/"+pid,
                'name': this.getStore("ProjectStore").findRecord('id', pid).data.name
            }
        ]);    
    },
    cardRender: function(card){
        //Attach click event for card edit
        card.el.on({
            scope: card,
            click: function() {
                Fragile.model.card.CardSettings.load(this.cardId, {
                    scope: this,
                    failure: function(record, operation) {
                        //do something if the load failed
                        //record is null
                    },
                    success: function(record, operation) {
                        //do something if the load succeeded

                        var settwin  = Ext.widget('cardsettings'),
                            settform = settwin.down('form').getForm();  

                        settwin.on('beforeshow', function(){
                            console.log("blah1");
                            settform.loadRecord(record);
                            
                        });

                        settwin.show();

                        
                        
                    },
                    callback: function(record, operation, success) {
                        //do something whether the load succeeded or failed
                        //if operation is unsuccessful, record is null
                    }
                });


                /*
                var employee = grid.getStore().getAt(rowIndex);
                              var review = reviewStore.findRecord('employee_id', employee.get('id'));
                              var win = new App.ReviewWindow({hidden:true});
                              var form = win.down('form').getForm();
                              form.loadRecord(employee);
                              form.loadRecord(review);
                              win.show();
                */
            },
            delegate: '.x-card-settings'
        });
    }
});