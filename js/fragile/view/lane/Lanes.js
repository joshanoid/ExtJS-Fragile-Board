Ext.define('Fragile.view.lane.Lanes', {
    extend: 'Ext.Panel',
    requires: ['Fragile.store.LaneStore', 'Fragile.view.card.Card'],
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    config: {
        lanes: false
    },

    initComponent: function(){
        this.items = this.buildLanes(this.getLanes());    
        this.callParent();
    },

    buildLanes: function(lanes, parent){
        if(typeof parent === 'undefined') parent = null;

        var me       = this,
            laneCpy  = lanes.slice(0),
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
                        items: []
                    });

                    actLane.getCards().each(function(card){
                        cfg.items.push(
                        {
                            xtype: 'card',
                            data: me.cardData(card)
                            // xtype: 'panel',
                            // title: card.get("title"),
                            // color: card.get("color"),
                            // html: 'asdwe',
                            // tbar: [{
                            //      text: 'Send',
                            //      iconCls: 'icon-send'
                            // },'-',{
                            //      text: 'Save',
                            //      iconCls: 'icon-save'
                            // },{
                            //      text: 'Check Spelling',
                            //      iconCls: 'icon-spell'
                            // },'-',{
                            //      text: 'Print',
                            //      iconCls: 'icon-print'
                            // },'->',{
                            //      text: 'Attach a File',
                            //      iconCls: 'icon-attach'
                            // }],
                            // listeners: {
                            //     afterrender: function(panel){
                            //         //@todo this is a bit ugly approach, to set title color like this... Investigate later
                            //         panel.header.getEl().dom.style.background = panel.color + " none";
                            //     }
                            // }
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
    },

    cardData: function(card){
        var data = card.getData(),
            hex2rgb = function(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            },
            textColor = function(bg){
                if((bg.r * 0.299 + bg.g * 0.587 + bg.b * 0.114) > 186)
                    return "#000000";
                else
                    return "#FFFFFF";
            };

        return Ext.apply(data, {
            textcolor: textColor( hex2rgb(data.color) )
        });
    }
});