module.exports = {
  ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/login');
  },
  fowardAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/user');
  }
};