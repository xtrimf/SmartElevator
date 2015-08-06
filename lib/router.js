Router.configure({
    layoutTemplate: 'layout'//,
    //waitOn: function() { return Meteor.subscribe('Elevators'); }
});
Router.route('/', {name: 'login'});

Router.onBeforeAction(function () {
    if (!Meteor.isServer && !Meteor.userId()) {
        this.redirect('/');
    }
    this.next();
});

Router.route('/admin', {name: 'adminPage'});

Router.route('/elevator/:_id', {
    name: 'elevatorPost',
    data: function() { return Elevators.findOne(this.params._id); }
});




