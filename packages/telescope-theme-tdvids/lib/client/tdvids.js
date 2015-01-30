// Add tagline template to hero zone

heroModules.push({
  template: 'tagline',
  order: 0
});


// Add Upload Post Field

var videoUpload = {
  propertyName: 'videoUpload',
  propertySchema: {
    type: String,
    optional: true,
    label: 'Your Video',
    autoform: {
        type: "file",
        omit: false
      }
  }
}

addToPostSchema.push(videoUpload);

// Move Upload Field to Top of Post Array



// Add Slingshot Upload



