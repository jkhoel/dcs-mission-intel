module.exports = function DCSDataRetriever(dataCallback) {

    let net = require('net');
    net.createServer(function(dcs_socket) {
        let time = new Date();
        console.log(time.getHours()+':'+ time.getMinutes() + ':' + time.getSeconds() + ' :: DCS connected');
        let buffer = "";
        dcs_socket.on('data', function(data) {
            buffer += data;
            let i = 0;
            while ((i = buffer.indexOf("\n")) >= 0) {
                let data = JSON.parse(buffer.substring(0, i));
                dataCallback(data);
                buffer = buffer.substring(i + 1);
            }
        });
    }).listen(3001);

};