export default {
  '/logout': {
    get (req, res) {
      req.session = null;
      res.redirect('/');
    }
  }
};
