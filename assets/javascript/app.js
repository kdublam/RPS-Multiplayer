// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiz0NZYkdBNE_MAKAJGEtXEOBMBcjuo74",
    authDomain: "rps-game-b9f8f.firebaseapp.com",
    databaseURL: "https://rps-game-b9f8f.firebaseio.com",
    projectId: "rps-game-b9f8f",
    storageBucket: "rps-game-b9f8f.appspot.com",
    messagingSenderId: "934355283744"
};
firebase.initializeApp(config);

var database = firebase.database();

// Local variables

var player1;
var p1name;
var p1choice;
var p1wins;
var p1losses;

var player2;
var p2name;
var p2choice;
var p2wins;
var p2losses;
