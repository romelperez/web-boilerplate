import User from 'server/models/User';

export default {

  '/users': {
    get (req, res) {

      const query = {};
      const projection = { hash: false };

      User.
        find(query, projection).
        exec().
        then(function (users) {
          res.json(users);
        }).
        catch(function (err) {
          res.status(500).json({ msg: String(err) });
        });
    },
  },

  '/users/:id': {
    get (req, res) {

      const { id } = req.params;
      const query = { _id: id };
      const projection = { hash: false };

      User.
        findOne(query, projection).
        exec().
        then(function (user) {
          if (!user) {
            res.status(400).json({ msg: 'Not found.' });
          }
          else {
            res.json(user);
          }
        }).
        catch(function (err) {
          res.status(500).json({ msg: String(err) });
        });
    },
  },
};
