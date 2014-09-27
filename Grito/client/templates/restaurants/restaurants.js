/**
 * Created by carlosvacamorales on 9/26/14.
 */

var dataTableOptions = {
    columns:[
        {
            title: 'Restaurante',
            data: 'Name'
        },
        {
            title: 'Ubicación',
            data: 'Location'
        },
        {
            title:'Dirección',
            data:'Address'
        },
        {
            title:'Telefono',
            data:'Phone'
        },
        {
            title:'Telefono Alternativo',
            data:'Alt_Phone'
        },
        {
            title:'Rating',
            data:'Rate'
        },
        {
            title: 'Creado',
            data: 'createDate',
            render:function(data,type,row){
                return moment(row.createDate).format("MM/DD/YYYY HH:MM:SS");
            }
        },
        {
            title: 'Ult. modificación',
            data: 'lastModification',
            render:function(data,type,row){
                return moment(row.lastModification).format("MM/DD/YYYY HH:MM:SS");
            }
        }
    ]
};

Template.restaurants.events ({
     'click #datatable tr ': function (e, tmpl) {
         $("#detailContainer").show("slow",function(){
             $.scrollTo("#detailContainer", {
                 axis : 'y',
                 duration : 1000
             });
         });
     }
});

Template.restaurants.helpers ({

    reactiveDataFunction: function () {
        return function () {
            return Restaurants.find().fetch();
        };
    },
    optionsObject: dataTableOptions

});


/*****************************************************************************/
/* restaurants: Lifecycle Hooks */
/*****************************************************************************/
Template.restaurants.created = function () {

};

Template.restaurants.rendered = function () {
    $("#detailContainer").hide(0);
};

Template.restaurants.destroyed = function () {
};