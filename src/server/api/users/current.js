import User from 'server/models/User';

export default {

  '/users/current': {
    get (req, res) {
      if (req.session.user) {

        const query = { _id: req.session.user };
        const projection = { hash: false };

        User.
          findOne(query, projection).
          exec().
          then(function (user) {
            res.json(user);
          }).
          catch(function (err) {
            res.status(500).json({ msg: String(err) });
          });
      }
      else {
        res.status(403).json({ msg: 'Unauthorized.' });
      }
    },
  },
};
