Meteor.publish('Admins', function() {
    return Meteor.Admins.find();
});
