// diables the ability of user to change his properties

Meteor.users.deny({
    update: function() {
        return true;
    }
});
