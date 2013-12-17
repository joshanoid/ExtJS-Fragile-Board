Ext.define('Fragile.view.Projects', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fragileprojects',
    title: 'Projects List',
    store: 'ProjectStore',
    dockedItems: [
        Ext.create('Ext.toolbar.Toolbar', {
            items: [
                {
                    text: 'Add New Project',
                    id: 'fragile-add-new-project',
                    glyph: 70
                },
                {
                    text: 'Edit Selected Project',
                    id: 'fragile-edit-project',
                    glyph: 47
                },
                {
                    text: 'Delete Selected Project',
                    id: 'fragile-delete-project',
                    glyph: 88
                }
            ]
        })
    ],
    initComponent: function() {
        this.columns = [
            {header: 'Project name',  dataIndex: 'name',  flex: 1}
        ];

        this.callParent();
    }
});