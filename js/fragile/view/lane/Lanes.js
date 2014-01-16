Ext.define('Fragile.view.lane.Lanes', {
    extend: 'Ext.Panel',
    requires: ['Fragile.store.LaneStore', 'Fragile.store.CardStore', 'Fragile.view.card.Card'],
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'stretch'
    },
    defaults: {
        flex: 1
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
                        layout: 'column',
                        autoScroll: false,
                        cls: 'x-panel-lane',
                        items: [],
                        listeners: {
                            afterrender: function(cmp){
                                Ext.create('Ext.dd.DropTarget', cmp.getEl(), {
                                    // dropNotAllowed: '',
                                    notifyDrop: function(source, e, data) {
                                        //don't drop to the same lane
                                        if(source.el.up(".x-panel-lane").dom.id !== this.el.id){
                                            cmp.add( Ext.getCmp(source.id) );
                                            
                                            var ls = Ext.getStore("LaneStore");
                                            ls.load(function(){
                                                var actLane = ls.findRecord("laneId", Ext.getCmp(source.id).ownerCt.itemId);
                                            });

                                            // var cardStore = Ext.getStore('CardStore');
                                            // var card = Ext.getCmp(source.id);
                                            // cardStore.load(function(){
                                            //     var cardModel = cardStore.findRecord('cardId', card.cardId);
                                            //     cardModel.set('laneId', src.laneId);
                                            //     src.add(card);
                                            //     cardStore.sync();
                                            // });



                                            //update store
                                            //Ext.getCmp(source.id).ownerCt.itemId = this is the card's parent lane id
                                            //cmp.itemId = this is the drop lane id
                                            


                                        }else return false;
                                    },
                                    notifyOver: function(dd, e, data){
                                        if(dd.el.up(".x-panel-lane").dom.id !== this.el.id)
                                            return Ext.dd.DropTarget.prototype.dropAllowed;
                                    }
                                }).addToGroup('cards');
                            }
                        }
                    });

                    actLane.getCards().each(function(card){
                        cfg.items.push(
                        {
                            xtype: 'card',
                            data: me.cardData(card)
                        });
                    });
                }else{
                    Ext.apply(cfg, {
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        border: false,
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