Meteor.publish('Admins', function() {
    return Meteor.Admins.find();
});

Meteor.methods({

    createNewUser: function(user){
        var u_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    elevatorID: user.profile.elevatorID,
                    description: user.profile.description}
            }
        ).toString();

        // add the info to Elevators
        e_id = Elevators.findOne({elevatorID: user.profile.elevatorID}); // get the Elevator doc if it exists
        if(e_id){ e_id2 = e_id._id} else {e_id2 = null}; // if exist, take the selector id, else null
        Elevators.upsert(e_id2, {userID: u_id, elevatorID: user.profile.elevatorID});

    }

    //getUserID: function() {
    //    Accounts.onCreateUser(function(options, user) {
    //        console.log('User Created! new user ID is '+ user._id);
    //        console.log(user.profile)
    //        return user
    //    });
    //
    //}


});



//Meteor.users.remove(' the _id of the user ');