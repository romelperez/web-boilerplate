use admin;
db.auth('superadmin', '12345678');

use reactb;
db.dropDatabase()
use reactb;

db.createUser({
  user: 'reactb-programmer',
  pwd: '12345678',
  roles: [{
    db: 'reactb',
    role: 'readWrite'
  }]
});
