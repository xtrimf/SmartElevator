// ****************************** Collections **********************************
Elevators = new Mongo.Collection("elevators");
allUsers =  new Mongo.Collection("userList");

// ****************************** Methods **************************************
myElevator = function (userId) {
    return Elevators.find({userID: userId});
};

userIsAdmin=function(){
    return Meteor.user().profile.isAdmin == 1
};

// ****************************** Subscriptions ********************************
if(Meteor.isClient){
    Meteor.subscribe("Elevators");
    Meteor.subscribe("allUsers")
}

// ****************************** Publications *********************************
if(Meteor.isServer){
    Meteor.publish("Elevators", function () {
        return myElevator(this.userId);
    });

    Meteor.publish("allUsers", function(){
        return allUsers.find();
    });
}