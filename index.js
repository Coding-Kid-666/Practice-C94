
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDbuReiis_8IeSTDNMXvIw0vXRCq6KCNMM",
    authDomain: "practice-c94-bac58.firebaseapp.com",
    databaseURL: "https://practice-c94-bac58-default-rtdb.firebaseio.com",
    projectId: "practice-c94-bac58",
    storageBucket: "practice-c94-bac58.appspot.com",
    messagingSenderId: "18035875369",
    appId: "1:18035875369:web:a544ab9b03ce0b6223c638"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      var username = document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
          purpose:"adding user",
          hello_world:"yess"
      });
  }