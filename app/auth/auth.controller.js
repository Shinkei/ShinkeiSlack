angular.module('angularfireSlackApp').controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
        email:'',
        password:''
    };

    authCtrl.register = function(){
        Auth.$createUser(authCtrl.user).then(function(user){
            authCtrl.login();
        }, function(error){
            authCtrl.error = error;
        });
    };
});