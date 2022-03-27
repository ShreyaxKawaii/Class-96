      const firebaseConfig = {
      apiKey: "AIzaSyDGXqMyD9jh_HN9bhM8kznrSR3HB2u94fw",
      authDomain: "kwitter-fa5b7.firebaseapp.com",
      databaseURL: "https://kwitter-fa5b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa5b7",
      storageBucket: "kwitter-fa5b7.appspot.com",
      messagingSenderId: "1053519905631",
      appId: "1:1053519905631:web:2e05d34f6ae466a7d4acea"
    };

      firebase.initializeApp(firebaseConfig);
      
      user_name=localStorage.getItem("Username");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function add_Room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("Room Name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}

getData();

function redirect_to_roomname(name){
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("Room Name");
window.location="index.html";
}

