Ext.define('Fragile.controller.Project', {
    extend: 'Ext.app.Controller',
    views: ['Projects', 'project.Edit', 'Breadcrumb'],
    models : [ "Project" ],
	stores : [ "ProjectStore" ],
    refs: [
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        },
        {
            ref : 'projectsgrid',
            selector: 'fragileprojects'
        },
        {
            ref: 'fheader',
            selector: 'fragileheader'
        },
        {
            ref: 'bc',
            selector: 'breadcrumb'
        }
    ],

    init: function(){
    	this.control({
    		'#fragile-add-new-project': {
                click: this.addProject
            },
            '#fragile-edit-project': {
                click: this.editProject
            },
            '#fragile-delete-project': {
    			click: this.deleteProject
    		},
            'fragileprojects': {
    			itemdblclick: this.loadBoard
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
        var row = this.getProjectsgrid().getSelectionModel().getSelection();
        if(row.length){
            var view = Ext.widget('projectedit', {title: 'Edit Project'});
            view.down('form').loadRecord(row[0]);
        }else{
            Ext.MessageBox.show({
                title: 'Error',
                msg: 'Please select a project!',
                buttons: Ext.MessageBox.OK,
                animateTarget: 'fragile-edit-project',
                icon: Ext.MessageBox.ERROR
            });
        }
    	
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

    loadBoard: function(grid, record){
        //This triggers the hashchange event what pathjs can capture, and run board controller
        Ext.History.add("#!/projects/" + record.get('id')); 
    },

    index: function(){
        var contentPanel = this.getContentPanel();
        contentPanel.removeAll(false);
        contentPanel.add( new Fragile.view.Projects );
        
        this.getBc().build([
            {
                'url': "#!/projects",
                'name': "Projects List"
            }
        ]);

        // if(Fragile.settings.loggedIn){
        //     this.getFheader().add(Ext.create("Ext.Button", {
        //         text: 'Hi <strong>'+Fragile.settings.loggedIn.username+'</strong>, you can logout here!',
        //         renderTo: this.dom,
        //         id: 'fragile-logout',
        //         style: {
        //             float: 'right',
        //             'margin-top': '10px'
        //         }
        //     }));
        // }
    }
});