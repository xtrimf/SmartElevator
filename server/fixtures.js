if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        username: 'felix',
        password: 'felix@consul',
        profile: {isAdmin:1}
    });

}