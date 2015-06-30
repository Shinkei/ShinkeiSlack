angular.module('angularfireSlackApp').factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
    var userRef = new Firebase(FirebaseUrl+'users');
    var users = $firebaseArray(userRef);
    var User = {
        getProfile: function(uid){
            return $firebaseObject(userRef.child(uid));
        },
        getDisplayName: function(uid){
            return users.$getRecord(uid).displayName;
        },
        all: users,
        getGravatar: function(uid){
            return '//www.gravatar.com/avatar'+user.$getRecord(uid).emailHash;
        }
    };

    return Users
});