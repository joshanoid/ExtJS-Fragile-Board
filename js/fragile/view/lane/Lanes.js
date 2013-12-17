Ext.define('Fragile.view.lane.Lanes', {
    extend: 'Ext.Panel',
    requires: ['Fragile.store.LaneStore'],
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    config: {
        lanes: false,
        items: [
            {
                html:'panel 122222222', 
                title: 'asdgww', 
                flex: 1, 
                layout: 'hbox', 
                items: [
                    {
                        html: 'subpanel1',
                        title: 'subpanel1', 
                        flex: 1
                    },{
                        html: 'subpanel2',
                        title: 'subpanel2', 
                        flex: 1
                    }
                ]
            },
            {html:'panel 2', width:150},
            {html:'panel 3', flex:2}
        ]
    },
    initComponent: function(){
        this.items = this.buildLanes(this.getLanes());    
        this.callParent();
    },

    buildLanes: function(lanes, id){
        if(typeof id === 'undefined') id = false;

        var laneCpy  = lanes.slice(0),
            laneCfg  = [],
            levelCfg = [],
            subItems = {};

        for(var i in lanes){
            if(!lanes[i].get("parent_id") || lanes[i].get("parent_id") === id){
                laneCfg.push({
                    html: '', 
                    title: lanes[i].get("name"), 
                    flex: 1 
                });
                levelCfg.push(lanes[i].get("id"));
                laneCpy.splice(i, 1);
            }else{
                if(!subItems[lanes[i].get("parent_id")]) subItems[lanes[i].get("parent_id")] = [];
                subItems[lanes[i].get("parent_id")].push(lanes[i]);
            }
        }
        
        if(Object.keys(subItems).length){
            for(var o in subItems){
                laneCfg[ levelCfg.indexOf(o) ].layout = 'hbox';
                laneCfg[ levelCfg.indexOf(o) ].items = this.buildLanes(subItems[o], o);
            }
        }

        return laneCfg;
    }
});