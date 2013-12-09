Ext.define('Fragile.view.Projects', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fragileprojects',
    title: 'Projects List',
    initComponent: function() {
        this.store = {
            fields: ['project_name'],
            data  : [
                {project_name: 'Project 1'},
                {project_name: 'Project 2'}
            ]
        };

        this.columns = [
            {header: 'Project name',  dataIndex: 'project_name',  flex: 1}
        ];

        this.callParent(arguments);
    }
});