angular.module('angularfireSlackApp').controller('ProfileCtrl', function($state, md5, auth, profil){
    var profileCtrl = this;
    profileCtrl.profile = profile;

    profileCtrl.udapteProfile = function(){
        profileCtrl.profil.emailHash = md5.createHash(auth.password.email);
        profileCtrl.profile.$save().then(function(){
            $state.go('channels');
        });
    };
});