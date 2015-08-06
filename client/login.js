Template.login.events({

    'submit': function (event) {
        event.preventDefault();
        var user = $('[name=user]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword({username: user},password,function(err) {
            if (err) {
                swal("Oops...", "incorrect user/password. Please try again", "error");
            } else {

                e_id = Elevators.findOne({userID: Meteor.userId()}); // get the Elevator doc of this user
                Router.go('elevatorPost',{_id: e_id._id});
            };
        })
    }
});