Template.elevatorPost.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            content: $(e.target).find('[name=content]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        console.log(this.username)
        post._id = Elevators.update(this._id,post);
        //Router.go('postPage', post);
    }
});