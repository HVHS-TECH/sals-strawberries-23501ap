

console.log("Running Sal's Strawberries")

function fb_write() {
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    console.log(favoriteFruit)
    firebase.database().ref('/').set(favoriteFruit)
}

var GLOBAL_user; // Google's user object
var favFruit = document.getElementById("favoriteFruit").value

// Set up a listener for the login state of the user.
function fb_login() {
    authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}
function fb_login() {
    firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
}

// Run when the login state of the user changes.
function fb_handleLogin(_user) {
    if (_user) {
        console.log("User is logged in")
        GLOBAL_user = _user; // Save the user object to a global variable
    } else {
        console.log("User is NOT logged in - Starting the popup process")
        fb_popupLogin();
    }
}

// Run the Google login popup
function fb_popupLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_user = result.user; // Save the user object to a global variable
        console.log("User has logged in")
    });
}



