Template.elevatorPost.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            userID: Meteor.userId(),
            elevatorID: this.elevatorID,
            content: $(e.target).find('[name=content]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        post._id = Elevators.update(this._id,post);
        if (post._id=1){
            swal("", "", "success");}
        else { swal("שגיאה", post._id.toString(), "error");}
        //Router.go('postPage', post);
    }
});