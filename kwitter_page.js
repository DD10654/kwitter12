
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
    
  username3 = localStorage.getItem("username");
  room_name2 = localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name2).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
      firebase_message_id = childKey; 
      message_data = childData;
   //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name1 = message_data['name'];
        msg = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
        msg_with_tag = "<h4 class='message_h4'>" + msg + "</h4>";
        like_with_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: " + like + "</span></button><hr>";

        row = name_with_tag + msg_with_tag + like_with_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
   //End code
} }); }); }
getData();

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name2).push({
        name:username3,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = " ";
}

function updateLike(msg_id) {
    console.log("The Like Button is pressed! The Message Id Is : " + msg_id);
    button_id = msg_id;
    likes = document.getElementById(button_id).value;
    likes_updated = Number(likes) + 1;
    console.log("The updated Likes are " + likes_updated);

    firebase.database().ref(room_name2).child(msg_id).update({
        like : likes_updated
    });
}



