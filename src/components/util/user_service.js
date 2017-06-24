var firebase = require('firebase');
var config = {
	apiKey: "AIzaSyD51EPXCcitQJ0eT4cO8Uu7fshX1KpnW_k",
	authDomain: "dummy-5c288.firebaseapp.com",
	databaseURL: "https://dummy-5c288.firebaseio.com",
	projectId: "dummy-5c288",
	storageBucket: "dummy-5c288.appspot.com",
	messagingSenderId: "51049279193"
};
firebase.initializeApp(config);


var firebaseAuthRef = firebase.auth();


function addUser(email, password, callback, userDetails) {
	firebaseAuthRef.createUserWithEmailAndPassword(email, password).then(function(user) {
        var uid = user.uid;
        var errorCode = "";
        var errorMessage = "mesgage";
        addUserDetails(user,userDetails);
		callback(errorCode, errorMessage,uid);
    }
    ).catch(function(error) {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
		callback(errorCode, errorMessage,null);
    }
    );
}


function authenticate(email, password, callback) {
	firebaseAuthRef.signInWithEmailAndPassword(email, password).then(function(user) {
        var errorCode = "";
        var errorMessage = "";
		callback(errorCode, errorMessage, user);
    }).catch(function(error) {
        var errorCode = error.code;
         var errorMessage = error.message;
         callback(errorCode, errorMessage,null);
    }
    );
}
function addUserDetails(user, userDetails, callBack) {
    var name = userDetails.name ;
    var pic  = userDetails.pic;
    var phone = userDetails.phone;
    console.log(userDetails);


    user.updateProfile({
        displayName:name,
        photoURL:pic,
        phoneNumber:phone
    }).then(function() {
        console.log("User is updated");
    }).catch(function(error) {
        console.log("Error occured while updateing");
    });
//    .then(function() {
//        var errorCode = "";
//        var errorMessage = "";
//        callback(errorCode, errorMessage,user);
//    }, function(error) {
//        var errorCode = error.code;
//        var errorMessage = error.message;
//        callback(errorCode, errorMessage,null);
//    });

}

function getCurrentUser() {
	//need to search in aync storage to mange login even after the app closes.
user = firebaseAuthRef.currentUser;
return user;
}


module.exports = {

	addUser : addUser,
	authenticate : authenticate,
	getCurrentUser: getCurrentUser

};
