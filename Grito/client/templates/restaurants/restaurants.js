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
        },
        {
            title: '',
            data: '',
            render:function(data,type,row){
                return '<i id="edit" class="fa fa-pencil-square-o fa-lg"></i>';
            }
        }
    ]
};

Template.restaurants.events ({
     'dblclick #datatable tr ': function (e, tmpl) {
         if(e.target.id != "edit")
         {
             $("#detailContainer").show("slow",function(){
                 $.scrollTo("#detailContainer", {
                     axis : 'y',
                     duration : 1000
                 });
             });
         }
     },
    'click #edit':function(e,t){
        var tr = $(e.target).closest('tr');
        var item = $('#datatable').DataTable().row (tr).data();
        Session.set('editMode','update');

        Session.set('selectedItem',item);
        Session.set('_id',item._id);
        $("#restaurantModal").modal();
    },
    'click .newRestaurant':function(e,t){
        Session.set('selectedItem',null);
        Session.set('editMode','insert');
        $("#restaurantModal").modal();
    }
});

Template.restaurants.helpers ({

    reactiveDataFunction: function () {
        return function () {
            return Restaurants.find().fetch();
        };
    },
    selectedItem: function () {
        return Session.get('selectedItem');
    },
    optionsObject: dataTableOptions

});

Template.restaurants.editMode = function ()
{
    return Session.get('editMode');
};

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


AutoForm.hooks({
    RestaurantForm: {
        beginSubmit: function(formId, template) {

        },
        onSuccess: function(operation, result, template) {
            $("#restaurantModal").modal('toggle');
        },
        onError: function(operation, error, template) {
            alert("error: " + error);
        }
    }
});