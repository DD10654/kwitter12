var firebaseConfig = {
      apiKey: "AIzaSyBg-sChHSIui57dC2tRCMZIsaRBSlDxhiE",
      authDomain: "first-website-1cf23.firebaseapp.com",
      databaseURL: "https://first-website-1cf23-default-rtdb.firebaseio.com",
      projectId: "first-website-1cf23",
      storageBucket: "first-website-1cf23.appspot.com",
      messagingSenderId: "435364783338",
      appId: "1:435364783338:web:84ccee3d7abdc40caba393"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username2 = localStorage.getItem("username");
    document.getElementById("name").innerHTML = "Welcome " + username2 + " !!";

function addRoom() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding a nice room name"
      });
      localStorage.setItem('room_name', roomname);
      window.location = "kwitterPage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname-" + Room_names);
      row = "<div class='Room_Name' id='" + Room_names + "' onclick='redirect(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitterPage.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


