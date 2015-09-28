var Firebase = require('firebase');
var ref = new Firebase('https://smallchat01.firebaseio.com/');
var topics = ['dogs', 'the color blue', 'Korean Barbeque', 'Match.com', 'babies', 'the paleo diet', 'American Football', 'country music'];
var currentTopic = 0;
var express = require('express');
var app = express();
setInterval(function() { ref.child('topic').set(topics[currentTopic++ %topics.length]); }, 60000);
app.use(express.static('.'));
app.listen(process.env.PORT || 3000);
