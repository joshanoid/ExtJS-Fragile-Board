Ext.define('Fragile.controller.Project', {
    extend: 'Ext.app.Controller',
    views: ['Projects', 'project.Edit'],
    models : [ "Project" ],
	stores : [ "ProjectStore" ],
    refs: [
        {
            ref : 'projectsgrid',
            selector: 'fragileprojects'
        }
    ],

    init: function(){
    	this.control({
    		'#fragile-add-new-project': {
                click: this.addProject
            },
            '#fragile-delete-project': {
    			click: this.deleteProject
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

    deleteProject: function(project){
        var row = this.getProjectsgrid().getSelectionModel().getSelection(); //.get('id');
        if(row.length){
            Ext.Msg.confirm('Remove Project', 'Are you sure?', function (button) {
                if (button === 'yes') {
                    Ext.getStore("ProjectStore").remove(row);
                }
            }, this);
        }else{
            Ext.MessageBox.show({
               title: 'Error',
               msg: 'Please select a project!',
               buttons: Ext.MessageBox.OK,
               animateTarget: 'fragile-delete-project',
               icon: Ext.MessageBox.ERROR
           });
        }
    },

    editProject: function(grid, record){
    	var view = Ext.widget('projectedit', {title: 'Edit Project'});
        view.down('form').loadRecord(record);
    },

    saveProject: function(button){
    	var store  = Ext.getStore("ProjectStore"),
    	    win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        if(typeof record === 'undefined'){
            //Add new Project
            store.add(values);
        }else{
            //Update Project
            record.set(values);
        }

        win.close();
    },

    index: function(){
        var contentpanel = Ext.getCmp("content-panel");
        contentpanel.removeAll();
        contentpanel.add({
        	xtype: "fragileprojects"
        });
    }
});