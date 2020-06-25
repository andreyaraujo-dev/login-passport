module.exports = {
  ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/');
  },
  fowardAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/perfil');
  }
};