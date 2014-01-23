Ext.define('Fragile.model.Card', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id',       type: 'int' },
        { name: 'lane_id',  type: 'int' },
        { name: 'user_name',type: 'string' },
        { name: 'title',    type: 'string' },
        { name: 'color',    type: 'string' } 
    ],
    
    belongsTo: {
        name: 'lane',
        instanceName: 'lane',
        model: 'Fragile.model.Lane',
        getterName: 'getLane',
        setterName: 'setLane',
        associationKey: 'lanes',
        foreignKey: 'lane_id'
    }
});