Template.login.events({

    'submit': function (event) {
        event.preventDefault();
        var user = $('[name=user]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword({username: user},password,function(err) {
            if (err) {
                swal("Oops...", "incorrect user/password. Please try again", "error");
            } else {
                 //console.log('isAdmin= '+Meteor.user().profile.isAdmin);
                if(Meteor.user().profile.isAdmin==1){
                    Router.go('adminPage');
                }else {
                    // subscribing through the collection.js to a specific elevator
                    console.log(Meteor.userId());
                    e_id = Elevators.findOne({userID: Meteor.userId().toString()}); // get the Elevator doc of this user
                    console.log(Elevators.findOne());
                    Router.go('elevatorPost', {_id: e_id._id});
                }
            };
        })
    }
});