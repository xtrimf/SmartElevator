if (Meteor.isClient) {
    Template.register.events({

        // create new user function
        'submit': function (event) {
            event.preventDefault();
            var user = $('[name=user]').val();
            var password = $('[name=password]').val();
            var ElevatorID = $('[name=ElevatorID]').val();
            var Description = $('[name=Desc]').val();

            // check that all fields are valid and then create
            if (ElevatorID && Description) {
                Accounts.createUser({username: user,password: password}
                //function(error,result){if(error){console.log(error.reason}});
            );
                // add the info to Elevators
                console.log(UserID);
                Elevators.insert({userID: userID, username: user, elevatorID: ElevatorID, description: Description})
            };
        }
    });

    Template.userList.helpers({
        users: function() {
            return Meteor.users.find();
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}