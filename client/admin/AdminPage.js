if (Meteor.isClient) {
  Template.adminPage.events({

    // create new user function
    'submit': function (event) {
      event.preventDefault();
      var user = $('[name=user]').val();
      var password = $('[name=password]').val();
      var ElevatorID = $('[name=ElevatorID]').val();
      var Description = $('[name=Desc]').val();

      // check that all fields are valid and then create
      if (ElevatorID && Description) {
        Accounts.createUser({username: user,password: password},function(err) {
              if (err) {
                console.log(err);
              }
            }
        );
         // a = Meteor.call('getUserID');
         // console.log(a);
        //Meteor.call('getUserID',function(err, response) {
        //  Session.set('newUserID', response);
        //    console.log(response)
        //});

        // add the info to Elevators
        e_id = Elevators.findOne({username: user}); // get the Elevator doc
        if(e_id){ e_id2 = e_id._id} else {e_id2 = null}; // if exist, take the selector id, else null
        console.log(e_id2+' - '+Meteor.userId() );
        Elevators.upsert(e_id2, {userID: Meteor.userId(), username: user, elevatorID: ElevatorID, description: Description});


      };
    }
  });

  Template.adminPage.helpers({
    users: function() {
      return Elevators.find();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });



}