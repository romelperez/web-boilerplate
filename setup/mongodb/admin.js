use admin;

db.createUser({
  user: 'superadmin',
  pwd: '12345678',
  roles: [ 'root' ]
});
