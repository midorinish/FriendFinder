var express = require("express");

var FriendList = require("./../data/friends.js").FriendList;
var Person = require("./../data/friends.js").Person;

var myFriendList = new FriendList("./app/data/list.json");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(myFriendList.friends);
  });

  app.post("/api/friends", function(req, res) {
    var newPerson = new Person(req.body.name, req.body.photo, req.body.scores);
    var bestie = myFriendList.getBestFriend(newPerson);

    myFriendList.addFriend(newPerson);

    var sendBack = {
      bestFriend: bestie,
      message: "Added and compared"
    };

    res.json(sendBack);
  });
};
