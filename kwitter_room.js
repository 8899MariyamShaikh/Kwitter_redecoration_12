const firebaseConfig = {
    apiKey: "AIzaSyDT0opbIK5GkfYrD17WoMl_htbVRm6j3oc",
    authDomain: "kwitter-896d9.firebaseapp.com",
    projectId: "kwitter-896d9",
    storageBucket: "kwitter-896d9.appspot.com",
    messagingSenderId: "546162348630",
    appId: "1:546162348630:web:0c02d7fa20926285f361f7"
  };
  
  firebase.initializeApp(firebaseConfig);

function getData(){ firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    } );
 } );
}

function logout()
{
    window.location="kwitter.html"
}