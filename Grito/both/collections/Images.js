/**
 * Created by carlosvacamorales on 9/26/14.
 */
//Images
/*
 */
Images = new SimpleSchema({
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

//Image types
/*
ImageTypes = new SimpleSchema({
    Type:{
        label:'Image Type',
        type:String
    }
});
    */