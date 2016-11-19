use reactb;
db.auth('reactb-programmer', '12345678');

db.users.drop();
db.createCollection('users');

var usersList = [{
  	"_id" : ObjectId("5813bc184b57665d404678bc"),
  	"name" : "Pepe Pérez",
  	"email" : "pepeperez@gmail.com",
    "img": "/img/user0.jpg",
  	"hash" : "$2a$10$C1SAGV7O29/vQTrIvQPDoe.oe117yWBhLYg6eLLrECKCTa72WIYmO",  // pwd: "11111111"
    "active": true,
    "admin": false
  }, {
  	"_id" : ObjectId("5813bc184b57665d404678bd"),
  	"name" : "María Rodriguez",
  	"email" : "mariarodriguez@gmail.com",
    "img": "/img/user1.jpg",
  	"hash" : "$2a$10$S7A5Tv9k0Z7Fyakk4hpKmuzMx2eIuisp1ZlQ6rk5UF/JNQyV9.iAG",  // pwd: "22222222"
    "active": true,
    "admin": true
  }, {
  	"_id" : ObjectId("5813bc184b57665d404678be"),
  	"name" : "Carlos Martínez",
  	"email" : "carlosmartinez@outlook.com",
    "img": "/img/user2.jpg",
  	"hash" : "$2a$10$qpcMNwIlpm/KMmcuU2MKuedrMH1iFc0XDcdcfD.QtYMqe9apYd6da",  // pwd: "33333333"
    "active": true,
    "admin": false
  }, {
  	"_id" : ObjectId("5813bc184b57665d404678bf"),
  	"name" : "Sandra Molina",
  	"email" : "sandramolina@yahoo.com",
    "img": "/img/user3.jpg",
  	"hash" : "$2a$10$iCf8jZuKhKULopdwy./xfOZT5jbmJo26ZwD2LB5zTLCuEy5AiNI.K",  // pwd: "44444444"
    "active": true,
    "admin": false
}];

usersList.forEach(function (user) {
  db.users.insert(user);
});
