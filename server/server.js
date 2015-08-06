Meteor.publish('Admins', function() {
    return Meteor.Admins.find();
});

Meteor.methods({

    getUserID: function() {
        Accounts.onCreateUser(function(){
            console.log('User Created! new user ID is '+ Meteor.userId());
            return Meteor.userId()
        });

    }


});



//Meteor.users.remove(' the _id of the user ');