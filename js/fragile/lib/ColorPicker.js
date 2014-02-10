Ext.define("Fragile.lib.ColorPicker", {
    alias: "widget.tcolorpicker",
    extend: "Ext.form.field.Trigger",
	luminanceImg:'img/luminance.png',
    spectrumImg:'img/spectrum.png',
    cls: 'text-colorpicker',
    extraTriggerCls: 'text-colorpicker-icon',

    circleImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFRJREFUeNpi/P//PwMMMDIyIjhQAJRnhLFZkBV+fPsIXS1YHK4BajJIIUiQAR2DxCHKIJbiVIiugYmBBDBIFJMUGoywIMEVzvzCcvCIYSQlBgECDAB/anr+Hp+qLwAAAABJRU5ErkJggg==',

    onTriggerClick: function (b) {
        var me = this;
        
        if (me.disabled) {
            return;
        }
        
        if (!me.menu) {
            me.menu = Ext.create("Ext.menu.Menu", {
                plain: true,
                showSeparator: false,
                visible: true,
                items: [{
                    xtype: "box",
                    autoEl: {
                        tag: "div",
                        height: 195,
                        width: 195,
                        cls: "text-colorpicker-box"
                    },
                    getParent: function () {
                        this.up("form")
                    },
                    listeners: {
                        render: function () {
                            el = this.el.dom.appendChild(document.createElement("div"));
                            me.drawSpace = el;
                            me.drawSpectrum();
                        }
                    }
                }]
            });
        }

        if(me.menu.visible){
	        me.menu.showAt(b.getXY());
	    }else{
	    	me.menu.hide();
	    }

	    me.menu.visible = !me.menu.visible;
    },
    regex: /^\#[0-9A-F]{6}$/i,
    allowBlank: false,
    setOnChange: "background",
    contrastColor: function (b, a) {
    	var hex2rgb = function(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            },
            textColor = function(bg){
                // if((bg.r * 0.299 + bg.g * 0.587 + bg.b * 0.114) > 186)
                if((bg.r * 0.2126 + bg.g * 0.7152 + bg.b * 0.0722) > 160)
                    return "#000000";
                else
                    return "#FFFFFF";
            };

        return textColor( hex2rgb(b) );
    },
    listeners: {
        select: function () {
            var a = document.getElementById(this.id + "-inputEl");
            if (this.setOnChange == "background") {
                a.style.backgroundColor = this.getValue();
                a.style.color = this.contrastColor(this.getValue());
            } else {
                if (this.setOnChange == "color") {
                    a.style.color = this.getValue();
                } else {
                    if (typeof this.setOnChange == "function") {
                        this.setOnChange();
                    }
                }
            }
        },
        afterrender: function () {
            !this.getValue() && this.setValue("#FFFFFF");
            this.fireEvent("select");
        }
    },
    drawSpectrum: function () {
        var a = this;
        !a.isValid() && a.setValue("#FFFFFF");
        a.spectrum = this.drawSpace.appendChild(document.createElement("canvas"));
        var b = a.spectrum.getContext("2d");
        a.spectrum.setAttribute("width", "200");
        a.spectrum.setAttribute("height", "200");
        a.spectrum.setAttribute("class", "text-colorpicker-box-spectrum");
        var c = new Image();
        c.onload = function () {
            b.drawImage(c, 0, 0)
        };
        c.src = a.spectrumImg;
        a.drawLuminance();

        Ext.get(a.spectrum).on("click", function (h, d) {
            function i(l, k, e) {
                var j = "0123456789ABCDEF";
                return "#" + (j[parseInt(l / 16)] + j[parseInt(l % 16)] + j[parseInt(k / 16)] + j[parseInt(k % 16)] + j[parseInt(e / 16)] + j[parseInt(e % 16)])
            }

            b = a.spectrum.getContext("2d");
            var g = [h.getXY()[0] - Ext.get(d).getLeft(), h.getXY()[1] - Ext.get(d).getTop()];
            try {
                var f = b.getImageData(g[0], g[1], 1, 1)
            } catch (h) {
                return
            }
            if (f.data[3] == 0) {
                b = a.luminance.getContext("2d");
                f = b.getImageData(g[0], g[1], 1, 1);
                if (f.data[3] == 0) {
                    return;
                }
                a.setValue(i(f.data[0], f.data[1], f.data[2]));
            } else {
                a.setValue(i(f.data[0], f.data[1], f.data[2]));
                a.drawLuminance()
            }
            a.fireEvent("select")
        });
    },
    drawLuminance: function () {
        var b = this;
        if (!b.luminance) {
            b.luminance = el.appendChild(document.createElement("canvas"));
            b.luminance.setAttribute("width", "200");
            b.luminance.setAttribute("height", "200");
            b.luminance.setAttribute("class", "text-colorpicker-box-luminance")
        }
        var c = b.luminance.getContext("2d");
        var a = [97.5, 98];
        c.clearRect(0, 0, b.luminance.width, b.luminance.height);
        c.beginPath();
        c.fillStyle = b.getValue();
        c.strokeStyle = b.getValue();
        c.arc(a[0], a[1], 65, 0, 2 * Math.PI, false);
        c.closePath();
        c.fill();
        
        var d = new Image();
        d.onload = function () {
            c.drawImage(d, 33, 32)
        };
        d.src = b.luminanceImg;
    }
});