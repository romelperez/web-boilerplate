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
};
