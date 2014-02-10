Ext.define('Fragile.view.card.Settings', {
    extend: 'Ext.window.Window',
    alias : 'widget.cardsettings',

    requires: ['Ext.form.Panel', 'Ext.form.field.HtmlEditor', 'Ext.form.field.ComboBox', 'Fragile.lib.ColorPicker'],
    title : 'Edit Card',
    layout: 'fit',
    modal: true,
    width: 700,

    initComponent: function() {
        this.items = [
            {
                xtype: 'tabpanel',
                activeTab: 0,
                items:[{
                    title: 'General',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'form',
                            padding: '5 5 0 5',
                            border: false,
                            style: 'background-color: #fff;',

                            items: [
                                {
                                    xtype: 'textfield',
                                    name : 'title',
                                    fieldLabel: 'Title'
                                },
                                {
                                    xtype: 'htmleditor',
                                    name : 'description',
                                    fieldLabel: 'Description'
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'type_id',
                                    fieldLabel: 'Type',
                                    valueField: 'id',
                                    displayField: 'name',
                                    store: 'card.TypeStore',
                                    typeAhead: true,
                                    autoload: true,
                                    emptyText: 'Select the card type'
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'status_id',
                                    fieldLabel: 'Status',
                                    valueField: 'id',
                                    displayField: 'name',
                                    store: 'card.StatusStore',
                                    typeAhead: true,
                                    autoload: true,
                                    emptyText: 'Select the card status'
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'priority_id',
                                    fieldLabel: 'Priority',
                                    valueField: 'id',
                                    displayField: 'name',
                                    store: 'card.PriorityStore',
                                    typeAhead: true,
                                    autoload: true,
                                    emptyText: 'Select the card priority'
                                },
                                {
                                    xtype: 'tcolorpicker',
                                    name : 'color',
                                    fieldLabel: 'Color'
                                }
                            ]
                        }
                    ]
                },{
                    title: 'Tab 2',
                    html: 'This is tab 2 content.'
                },{
                    title: 'Tab 3',
                    html: 'This is tab 3 content.'
                }]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
}); 