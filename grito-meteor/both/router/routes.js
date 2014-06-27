/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
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
  this.route('home', {path: '/'});
  this.route('sign-in', {path: '/sign-in'});
  this.route('sign-out', {path: '/sign-out'});
});
