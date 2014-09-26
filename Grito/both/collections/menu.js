/**
 * Created by carlosvacamorales on 9/26/14.
 */
Menu = new Meteor.Collection('menu');

var schema = {};

schema.Menu = new SimpleSchema({
    Restaurant:{
        label:'Restaurant',
        type:String
    },
    Name:{
        label: 'Menu Name',
        type:String
    },
    products:{
        type:Products,
        optional:true
    },
    status:{
        label:'Menu status',
        defaultValue:1
    },
    createDate: {
        type: Date,
        label: 'Create Date',
        defaultValue: new Date ()
    },
    lastModification: {
        type: Date,
        label: 'Last Modification Date',
        defaultValue: new Date ()
    }
});