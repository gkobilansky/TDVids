Meteor.startup(function () {

	  Template[getTemplate('tagline')].helpers({
    isHome: function () {
      return Router.current().location.get().path == '/';
    }
  });

});