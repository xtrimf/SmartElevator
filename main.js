if (Meteor.isClient) {

    Template.register.events({
        'submit': function(event){
            console.log('Im in');
            event.preventDefault();
            var user = $('[name=user]').val();
            var password = $('[name=password]').val();
            var ElevatorID = $('[ElevatorID=ElevatorID]').val();
            Accounts.createUser({
                user: user,
                password: password,
                elevatorID: ElevatorID
            });
        }
    });

    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
            console.log('Working!')
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}