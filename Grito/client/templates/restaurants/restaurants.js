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
    /*
     'click ': function (e, tmpl) {

     }
    */
});

Template.restaurants.helpers ({

    reactiveDataFunction: function () {
        return function () {
            return Restaurants.find().fetch();
        };
    },
    optionsObject: dataTableOptions

});