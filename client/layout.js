

Template.layout.helpers({

    ftp: function(){
        var FTPS = require('ftps');
        var ftps = new FTPS({
            host: '212.179.112.63', // required
            username: 'consul', // required
            password: 'admin@consul', // required
            protocol: 'sftp', // optional, values : 'ftp', 'sftp', 'ftps',... default is 'ftp'
            // protocol is added on beginning of host, ex : sftp://domain.com in this case
            port: 32222 // optional
            // port is added to the end of the host, ex: sftp://domain.com:22 in this case
        });
    }
})
