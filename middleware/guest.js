export default ({ app, redirect }) =>
  app.$auth.loggedIn ? app.$auth.redirect('home') : redirect()
