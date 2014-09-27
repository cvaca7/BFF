/**
 * Created by carlosvacamorales on 9/26/14.
 */
Restaurants = new Meteor.Collection('restaurants');

var schema = {};

schema.Restaurants = new SimpleSchema({
    Name:{
        label:'Restaurant Name',
        type:String
    },
    Location:{
        label: '2D Coordinates',
        type: [Number],
        decimal: true,
        index: "2d"
    },
    Address:{
        label:'Restaurant Address',
        type:String,
        optional:true
    },
    Phone:{
        label:'Restaurant Phone',
        type:String,
        optional:true
    },
    Alt_Phone:{
        label:'Restaurant Alt. Phone',
        type:String,
        optional:true
    },
    Rate:{
        label:'Restaurant Rate',
        type:Number,
        max:5,
        min:0,
        defaultValue:0
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

Restaurants.attachSchema(schema.Restaurants);