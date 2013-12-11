Ext.define('Fragile.view.Projects', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fragileprojects',
    title: 'Projects List',
    dockedItems: [
        Ext.create('Ext.toolbar.Toolbar', {
            items: [
                {
                    text: 'Add New Project',
                    id: 'fragile-add-new-project'
                }
            ]
        })
    ],
    initComponent: function() {
        this.store = {
            fields: ['name'],
            data  : [
                {name: 'Project 1'},
                {name: 'Project 2'}
            ]
        };

        this.columns = [
            {header: 'Project name',  dataIndex: 'name',  flex: 1}
        ];

        this.callParent(arguments);
    }
});