Package.describe({summary: "Telescope Video Upload package"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

});