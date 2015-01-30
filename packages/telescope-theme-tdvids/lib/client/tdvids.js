// Add tagline template to hero zone

heroModules.push({
  template: 'tagline',
  order: 0
});


// Add Upload Post Field

var thumbnailProperty = {
  propertyName: 'thumbnailUrl2',
  propertySchema: {
    type: String,
    optional: true,
    label: 'thumbnail2'

  }
}

addToPostSchema.push(thumbnailProperty);

addToPostSchema.unshift(thumbnailProperty);
