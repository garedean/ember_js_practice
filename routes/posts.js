Blogger.PostsRoute = Ember.Route.extend({
  // This top part is the default convention. Here it is
  // stated explicitly

  // Note that if you don't declare 'controller',
  // it creates one implicitly
  controllerName: 'posts',
  renderTemplate: function() {
    this.render('posts');
  }, model: function() {
    return posts;
  }
});
