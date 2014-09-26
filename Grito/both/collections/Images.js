/**
 * Created by carlosvacamorales on 9/26/14.
 */
//Images
Images = new Meteor.Collection('images');

var schema = {};

schema.Images = new SimpleSchema({
    Name:{
        label:'Product Name',
        type:String,
        optional:true
    },
    url:{
        label:'Product Description',
        type:String
    },
    Type:{
        label:'Image Type',
        type:String
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

Images.attachSchema(schema.Images);




//Image types
ImageTypes = new Meteor.Collection('imageTypes');

var schema = {};

schema.ImageTypes = new SimpleSchema({
    Type:{
        label:'Image Type',
        type:String
    }
});

ImageTypes.attachSchema(schema.ImageTypes);