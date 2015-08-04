if (Meteor.isClient) {
    Template.register.events({
        'submit': function (event) {
            event.preventDefault();
            var user = $('[name=user]').val();
            var password = $('[name=password]').val();
            var ElevatorID = $('[name=ElevatorID]').val();
            Accounts.createUser({
                username: user,
                password: password,
                profile: {
                    elevatorID: ElevatorID
                }
            });
            console.log('Im in2');
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