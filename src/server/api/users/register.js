import bcrypt       from 'bcrypt';
import vulcanval    from 'vulcanval';
import settings     from 'server/settings';
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
            res.status(400);
            throw new Error('The email is already taken.');
          }
        }).
        then(function () {
          return new Promise(function (resolve) {
            bcrypt.hash(map.pwd, settings.security.saltRounds, function (err, hash) {
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
          if (res.statusCode === 200) {
            res.status(500);
          }
          res.json({ msg: String(err) });
        });
    }
  },
};
