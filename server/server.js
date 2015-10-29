
Meteor.publish("userList", function () {
    return Meteor.users.find();
});

Elevators.allow({
    update: function() {
        return true;
    }
});

//Meteor.publish("Elevators", function (userID) {
//    return Elevators.find();
//});

//Meteor.publish('Admins', function() {
//    return Meteor.Admins.find();
//});

Meteor.methods({

       createNewUser: function(user){

        var u_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    elevatorID: user.profile.elevatorID,
                    description: user.profile.description}
            }
        ).toString();

        //add to manage userlist from admin
        allUsers.insert({
            username: user.username,
            elevatorID: user.profile.elevatorID,
            description: user.profile.description
             });
        // add the info to Elevators
        e_id = Elevators.findOne({elevatorID: user.profile.elevatorID}); // get the Elevator doc if it exists
        if(e_id){ e_id2 = e_id._id} else {e_id2 = null}; // if exist, take the selector id, else null
        Elevators.upsert(e_id2, {userID: u_id, elevatorID: user.profile.elevatorID});

    },

    deleteUser: function (username) {

        // get the userID
        user = Meteor.users.findOne({username: username})._id;

        try {
            // delete this user
            Meteor.users.remove(user);
            // delete it from allUsers
            allUsers.remove({username: username});
            // delete associated elevators
            Elevators.remove({userID: user});
        } catch(e){
            console.log(e)
            return e
        }
            console.log('user '+username+' deleted');
            return 'user '+username+' deleted'
        },

    //updateElevator: function (id,post) {
    //    try {
    //        console.log('Update started...');
    //        Elevators.update(id1, post,function(err) {
    //            if (err) {throw new Meteor.Error('error',err.message);}
    //
    //        });
    //        console.log('Update successful');
    //        return 1
    //    } catch(e) {
    //        console.log('error: '+e);
    //        return e.toString();
    //    }
    //},

//    ftpUpload: function () {
//        var ftps = new FTPS({
//            host: 'ecbiz102.inmotionhosting.com', // required
//            username: 'consul@tcmherbalist.com', // required
//            password: 'admin@consul', // required
//            protocol: 'ftp' // optional, values : 'ftp', 'sftp', 'ftps',... default is 'ftp'
//            // proftp.tocol is added on beginning of host, ex : sftp://domain.com in this case
//            //port: 21 // optional
//            // port is added to the end of the host, ex: sftp://domain.com:22 in this case
//        });
//// Do some amazing things
//        //ftp.cd('myDir').addFile(__dirname + '/test.txt').exec(console.log);
//        ftps.get('people.txt');
//    },


    httPost: function (post) {
        server = 'http://212.179.112.63/apps/consul/data/index.php';
        //server ='http://ecbiz102.inmotionhosting.com/~tcmher5/consul/index.php';
        try {
            var result = HTTP.post(server,
                {
                    params: {eID: post.elevatorID ,
                             title: post.title ,
                             content: post.content
                            }
                }
            );
            console.log(result.statusCode);
            return result.statusCode;
        } catch(e) {
            return 'Cannot post to server...Please try again in a few seconds ('+e+')';
        }
    }
});

//Meteor.users.remove(' the _id of the user ');