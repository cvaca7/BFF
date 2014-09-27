/**
 * Created by carlosvacamorales on 9/26/14.
 */
Products = new Meteor.Collection('products');

var schema = {};

schema.Products = new SimpleSchema({
    Name:{
        label:'Product Name',
        type:String
    },
    Description:{
        label:'Product Description',
        type:String,
        optional:true
    },
    Price:{
        label:'Current Price',
        type:Number,
        decimal: true
    },
    Restaurant:{
        type:String,
        label:'Restaurant'
    },
    Menu:{
        type:Boolean,
        label:'Menu',
        defaultValue:false
    },
    Rate:{
        label:'Product Rate',
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

Products.attachSchema(schema.Products);