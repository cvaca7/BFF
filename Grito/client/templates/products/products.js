/**
 * Created by carlosvacamorales on 9/26/14.
 */

var dataTableOptions = {
    columnDefs: [
        { visible: false, targets: 0 }//Se supone que no mostrara Restaurante con esto.
    ],
    drawCallback: function ( settings ) {
        var api = this.api();
        var rows = api.rows( {page:'current'} ).nodes();
        var last=null;

        api.column(0, {page:'current'} ).data().each( function ( group, i ) {
            if ( last !== group ) {
                $(rows).eq( i ).before(
                        '<tr class="bg-success"><td colspan="9">'+group+'</td></tr>'
                );

                last = group;
            }
        } );
    },
    columns:[
        {
            title: 'Restaurante',
            data: 'Restaurant'
        },
        {
            title: 'Producto',
            data: 'Name'
        },
        {
            title: 'Descripción',
            data: 'Description'
        },
        {
            title:'Precio Unitario',
            data:'Price'
        },
        {
            title:'Menú',
            data:'Menu'
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

Template.products.events ({
    'click #edit':function(e,t){
        var tr = $(e.target).closest('tr');
        var item = $('#datatable').DataTable().row (tr).data();
        Session.set('editMode','update');

        Session.set('selectedItem',item);
        Session.set('_id',item._id);
        $("#productModal").modal();
    },
    'click .newRestaurant':function(e,t){
        Session.set('selectedItem',null);
        Session.set('editMode','insert');
        $("#productModal").modal();
    }
});

Template.products.helpers ({

    reactiveDataFunction: function () {
        return function () {
            return Products.find().fetch();
        };
    },
    selectedItem: function () {
        return Session.get('selectedItem');
    },
    optionsObject: dataTableOptions

});

Template.products.editMode = function ()
{
    return Session.get('editMode');
};
Template.products.optionvalues = function()
{
    return Restaurants.find().map(function (c) {
        return {label: c.Name, value: c._id};
    });
};
/*****************************************************************************/
/* restaurants: Lifecycle Hooks */
/*****************************************************************************/
Template.products.created = function () {

};

Template.products.rendered = function () {
    $("#detailContainer").hide(0);
};

Template.products.destroyed = function () {
};


AutoForm.hooks({
    ProductForm: {
        beginSubmit: function(formId, template) {

        },
        onSuccess: function(operation, result, template) {
            $("#productModal").modal('toggle');
        },
        onError: function(operation, error, template) {
            alert("error: " + error);
        }
    }
});