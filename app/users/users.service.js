angular.module('angularfireSlackApp').factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
    var userRef = new Firebase(FirebaseUrl+'users');
    var connectedRef = new Firebase(FirebaseUrl+'.info/connected');
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
        },
        setOnline: function(uid){
            var connected = $firebaseObject(connectedRef);
            var online = $firebaseArray(userRef.child(uid+'/online'));

            connected.$watch(function(){
                if(connected.$value === true){
                    online.$add(true).then(function(connectedRef){
                        connectedRef.onDisconnect().remove();
                    });
                }
            });
        }
    };

    return Users
});