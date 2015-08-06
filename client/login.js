Template.login.events({

    // create new user function
    'submit': function (event) {
        event.preventDefault();
        var user = $('[name=user]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword({username: user},password,function(err) {
            if (err) {
                console.log(err);
                alert('incorrect user/password. Please try again ');
            } else {

                e_id = Elevators.findOne({username: Meteor.user().username}); // get the Elevator doc
                console.log(e_id._id)
                Router.go('elevatorPost',{_id: e_id._id});
            };
        })
        console.log('login.js');

    }
});