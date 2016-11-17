import bcrypt from 'bcrypt';
import User   from 'server/models/User';

export default {

  '/users/login': {
    post (req, res) {

      const { email, pwd } = req.body;
      const query = { email };

      User.
        findOne(query).
        exec().
        then(function (user) {
          if (!user) {
            res.status(400).json({ msg: 'Your email was not found.' });
          }
          return user;
        }).
        then(function (user) {
          if (!user) return;

          bcrypt.compare(pwd, user.hash, function (err, result) {
            if (err || !result) {
              res.status(401).json({ msg: 'Your password is incorrect.' });
            }
            else {
              req.session.user = user._id;
              res.json({ msg: true });
            }
          });
        }).
        catch(function (err) {
          res.status(500).json({ msg: String(err) });
        });
    }
  },

  '/users/isauth': {
    get (req, res) {
      if (req.session && req.session.user) {
        res.json({ msg: true });
      }
      else {
        res.json({ msg: false });
      }
    },
  },
};
