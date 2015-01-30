    Package.describe({
  summary: "Telescope tdvids theme",
  version: '0.1.0',
  name: "telescope-theme-tdvids"
});

Package.onUse(function (api) {

	// --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
  	'telescope-base', 
  	'fourseven:scss',			 // SCSS compilation package
  	'iron:router',                // routing package
  	'telescope-theme-hubble'
  	]);

  // client

api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);


// server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------
    

 // both
  
  api.add_files([
    'lib/client/tdvids.js',
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    'lib/client/templates/tagline.html',
    'lib/client/templates/helpers.js',
    ], ['client']);

// -------------------------------- 3. Variables to export --------------------------------

  api.export([
    'primaryNav',
    'secondaryNav',
    'postModules',
    'postMeta'
  ]);


});


