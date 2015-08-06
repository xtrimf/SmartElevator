if (Meteor.isClient) {
  Template.adminPage.events({

    // create new user function
    'submit': function (event) {
      event.preventDefault();
      var username = $('[name=user]').val();
      var password = $('[name=password]').val();
      var ElevatorID = $('[name=ElevatorID]').val();
      var Description = $('[name=Desc]').val();

      // check that all fields are valid and then create
      if (username && password && ElevatorID && Description) {
        var user = {
              username: username,
              password: password,
              profile: {
                elevatorID: ElevatorID,
                description: Description}
            }

          Meteor.call('createNewUser', user, function(error, id) {
              if (error) {
                  // display the error to the user
                  console.log(error);
              } else {
                  //Router.go('awesome');
              }
          });

      } else {  // not all field are filled
          swal("Oops...", "Please fill in ALL the fields!", "error");
      }
    }
  });

  Template.adminPage.helpers({
    users: function() {
      return Meteor.users.find();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });



}