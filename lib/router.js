Router.configure({
    layoutTemplate: 'layout'//,
    //waitOn: function() { return Meteor.subscribe('Elevators'); }
});

Router.route('/elevator/:_id', {
    name: 'elevatorPost',
    data: function() { return Elevators.findOne(this.params._id); }
});

Router.route('/', {name: 'login'});
Router.route('/admin', {name: 'adminPage'});