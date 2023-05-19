
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCPSCN5xTp8ydXjAZD8XKJ9D571O4PJ7qI",
    authDomain: "kwitter94-ed135.firebaseapp.com",
    databaseURL: "https://kwitter94-ed135-default-rtdb.firebaseio.com",
    projectId: "kwitter94-ed135",
    storageBucket: "kwitter94-ed135.appspot.com",
    messagingSenderId: "695929685195",
    appId: "1:695929685195:web:30e6c894c2a3a1854b074e",
  };
  firebase.intitialize(firebasConfig);
  function getData(){firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML} ) room_name = childKey;}

  
  getData();
  
  function addRoom()
  {
room_name = document.getElementById("room_name").Value;
firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

localStorage.setItem("room_name, room_name");

window.location = "kwitter_page.html";

  }
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }