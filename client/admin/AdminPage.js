//console.log(userList);
//Meteor.users.allow({
//    insert: function(userId, doc) {
//        // only allow posting if you are logged in
//        return !! userId;
//    }
//});

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
            };

          Meteor.call('createNewUser', user, function(error, id) {
              if (error) {
                  // display the error to the user
                  //console.log(error);
                  swal("Oops...", error, "error");
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
    allusers: function() {
        if (Meteor.user().profile.isAdmin != 1) {
            Router.go('login');
        } else {
            return allUsers.find();
        }
    }
  });


