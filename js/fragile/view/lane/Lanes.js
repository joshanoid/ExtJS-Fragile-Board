Ext.define('Fragile.view.lane.Lanes', {
    extend: 'Ext.Panel',
    requires: ['Fragile.store.LaneStore'],
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    config: {
        lanes: false
    },
    initComponent: function(){
        var laneCfg = this.buildLanes(this.getLanes());
        console.log(laneCfg);

        this.items = laneCfg;    
        this.callParent();
    },

    buildLanes: function(lanes, parent){
        if(typeof parent === 'undefined') parent = null;

        var laneCpy  = lanes.slice(0),
            laneCfg  = [];

        for(var i in lanes){
            var actLane = lanes[i];

            if(actLane.get("parent_id") === parent){
                laneCpy.splice(i, 1);

                var cfg = {
                        html: '',
                        itemId: actLane.get("id"), 
                        title: actLane.get("name"), 
                        flex: 1
                    },
                    childs = this.buildLanes(laneCpy, actLane.get("id"));

                if(!childs.length){
                    //Apply cards to this lane, it hasn't got child lane
                    Ext.apply(cfg, {
                        layout: 'vbox',
                        items: [],
                        defaults: {width: '40%', margin: 5}
                    });

                    actLane.getCards().each(function(card){
                        cfg.items.push({
                            xtype: 'panel',
                            title: card.get("title"),
                            color: card.get("color"),
                            listeners: {
                                afterrender: function(panel){
                                    //@todo this is a bit ugly approach, to set title color like this... Investigate later
                                    panel.header.getEl().dom.style.background = panel.color + " none";
                                }
                            }
                        });
                    });
                }else{
                    Ext.apply(cfg, {
                        layout: 'hbox',
                        items: childs
                    });
                }

                laneCfg.push( cfg );
            }
        }

        return laneCfg;
    }
});