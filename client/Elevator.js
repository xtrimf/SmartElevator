Template.elevatorPost.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            userID: Meteor.userId(),
            elevatorID: this.elevatorID,
            content: $(e.target).find('[name=content]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        // update the DB
        Elevators.update(this._id, { $set: post },function(err) {
            if (err) {
                swal("שגיאה", err, "error");
                throw ''; // exit script
            }
        });


        // send POST to server
        Meteor.call('httPost',post,function(err, response) {
            Session.set('serverResponse', response);
            //swal("שגיאה", response, "error");
            if (err) {
                swal("שגיאה", err + response, "error");
            } else {
                if (Session.get('serverResponse') == 200) {
                    swal("", "", "success");
                }
            }
        })
        //    Session.set('serverResponse', response)});
        //
        //console.log(Session.get('serverResponse'));
        //
        //// show final message
        //if (Session.get('serverResponse') == 200){
        //    swal("", "", "success");}
        //else {
        //    swal("שגיאה", Session.get('serverResponse'), "error");
        //    }

    }
});

