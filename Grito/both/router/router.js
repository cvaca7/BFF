/**
 * Created by carlosvacamorales on 9/26/14.
 */
Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound',
    templateNameConverter: 'none',
    routeControllerNameConverter: 'upperCamelCase',
    yieldTemplates: {
        'header': { to: 'header' },
        'footer': { to: 'footer' }
    }
});

Router.map(function () {
    this.route('home', {path: '/', template:'Home'});
});