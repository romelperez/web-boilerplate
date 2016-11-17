import bcrypt       from 'bcrypt';
import vulcanval    from 'vulcanval';
import User         from 'server/models/User';
import validators   from 'shared/tools/validators';

export default {

  '/users/register': {
    post (req, res) {

      const vv = vulcanval(validators.register);
      const invalids = vv.validate(req.body);

      if (invalids) {
        res.status(400).json({ msg: 'Data is invalid.' });
        return;
      }

      const map = vv.cleanMap(false, req.body);
      const query = { email: map.email };

      User.
        findOne(query).
        exec().
        then(function (user) {
          if (user) {
            throw new Error('The email is already taken.');
          }
        }).
        then(function () {
          return new Promise(function (resolve) {
            bcrypt.hash(map.pwd, function (err, hash) {
              if (err) throw err;
              resolve(hash);
            });
          });
        }).
        then(function (hash) {
          map.hash = hash;
          const user = new User(map);
          return user.save();
        }).
        then(function () {
          res.json({ msg: true });
        }).
        catch(function (err) {
          res.status(500).json({ msg: String(err) });
        });
    }
  },
};
