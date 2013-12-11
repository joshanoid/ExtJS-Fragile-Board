Ext.define('Fragile.controller.Project', {
    extend: 'Ext.app.Controller',
    views: ['Projects', 'project.Edit'],
    models : [ "Project" ],
	stores : [ "ProjectStore" ],
    init: function(){
    	this.control({
    		'#fragile-add-new-project': {
    			click: this.addProject
    		},
    		'fragileprojects': {
    			itemdblclick: this.editProject
    		},
    		'projectedit button[action=save]': {
                click: this.saveProject
            }

    	});
    },

    addProject: function(){
    	var view = Ext.widget('projectedit', {title: 'Add New Project'});
    },

    editProject: function(grid, record){
    	var view = Ext.widget('projectedit', {title: 'Edit Project'});
        view.down('form').loadRecord(record);
    },

    saveProject: function(button){
    	var store = Ext.getStore("ProjectStore");
    	store.insert(0, {name: 'dFSEDWERWG'});
    	store.sync();
    },

    index: function(){
        var contentpanel = Ext.getCmp("content-panel");
        contentpanel.removeAll();
        contentpanel.add({
        	xtype: "fragileprojects"
        });
    }
});