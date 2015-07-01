angular.module('angularfireSlackApp').controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    var channelsCtrl.profile = profile;
    var channelsCtrl.channels = channels;
    var channelsCtrl.getDisplayName = users.getDisplayName;
    var channelsCtrl.getGravatar = Users.getGravatar;
    var channelsCtrl.users = Users.all;
    Users.setOnline(profile.$id);

    channelsCtrl.logout = function(){
        channelsCtrl.profile.online = null;
        channelsCtrl.profile.$save().then(function(){
            Auth.$unauth();
            $state.go('home');
        });
    };

    channelsCtrl.newChannel = {
        name: ''
    };

    channelsCtrl.createChannel = function(){
        channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
            $state.go('channels.messages', {channelId: ref.key()});
            channelsCtrl.newChannel = {
                name: ''
            };
        });
    };
});