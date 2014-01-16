Ext.define('Fragile.view.card.Card', {
    extend: 'Ext.Container',
    alias: 'widget.card',
    border: true,
    width: 185,
    cls: 'x-card-panel',
    // draggable: true,

    adraggable: {
        // Called the instance the element is dragged.
        b4StartDrag : function() {
            // Cache the drag element
            if (!this.el) {
                this.el = Ext.get(this.getEl());
            }
            
            //Cache the original XY Coordinates of the element, we'll use this later.
            this.originalXY = this.el.getXY();
            this.panelProxy.show();
        },
        // ghost: Ext.Element(document.createElement('div')),
        // Called when element is dropped not anything other than a dropzone with the same ddgroup
        onInvalidDrop : function() {
            // Set a flag to invoke the animated repair
            this.invalidDrop = true;
        },
        // Called when the drag operation completes
        endDrag : function() {
            // Invoke the animation if the invalidDrop flag is set to true
            if (this.invalidDrop === true) {
                var pp = this.panelProxy;

                // Remove the drop invitation
                this.el.removeCls('dropOK');
                
                // Apply the repair animation
                pp.ghost.el.animate({
                    duration: 1000,
                    to: {
                        x: this.originalXY[0],
                        y: this.originalXY[1]
                    },
                    listeners: {
                            afteranimate: function(){ 
                                pp.hide();
                            }
                    }
                });


                // setXY([this.originalXY[0], this.originalXY[1]], animCfgObj);

                // this.el.setXY([this.originalXY[0], this.originalXY[1]], animCfgObj);
                delete this.invalidDrop;
            }
        },
        // Called upon successful drop of an element on a DDTarget with the same
        onDragDrop : function(evtObj, targetElId) {
            // Wrap the drop target element with Ext.Element
            var dropEl = Ext.get(targetElId);
            
            // Perform the node move only if the drag element's
            // parent is not the same as the drop target
            if (this.el.dom.parentNode.id != targetElId) {
                
                // Move the element
                dropEl.appendChild(this.el);
                
                // Remove the drag invitation
                this.onDragOut(evtObj, targetElId);
                
                // Clear the styles
                this.el.dom.style.position ='';
                this.el.dom.style.top = '';
                this.el.dom.style.left = '';
            }
            else {
                // This was an invalid drop, initiate a repair
                this.onInvalidDrop();
            }
        },
        // Only called when the drag element is dragged over the a drop target with the same ddgroup
        onDragEnter : function(evtObj, targetElId) {
            // Colorize the drag target if the drag node's parent is not the same as the drop target
            if (targetElId != this.el.dom.parentNode.id) {
                this.el.addCls('dropOK');
            }
            else {
                // Remove the invitation
                this.onDragOut();
            }
        },
        // Only called when element is dragged out of a dropzone with the same ddgroup
        onDragOut : function(evtObj, targetElId) {
            this.el.removeCls('dropOK');
        }
    },

    border: false,
    
    afterRender: function(){
        this.callParent(arguments);
        
        var dd = Ext.create('Ext.dd.DragSource', this.el, {
            group: 'cards'
        });
    },

    tpl: [
        '<div class="x-card-toolbar" style="background-color: {color}; color: {textcolor}">',
            '<div class="x-card-settings">&nbsp;</div>',
            '<div class="x-card-author">{user_name}</div>',
            '<div class="x-card-id">#{id}</div>',
        '</div>',
        '<div class="x-card-content-container">',
            '<div class="x-card-content">{title}</div>',
        '</div>'
    ]
});