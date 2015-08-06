Template.logout.events({

    'submit': function (event) {
        Meteor.logout();
        //Router.go('/');
    }
});