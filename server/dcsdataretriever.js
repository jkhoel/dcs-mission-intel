module.exports = function DCSDataRetriever() {

    let net = require('net');
    net.createServer(function(dcs_socket) {
        console.log('DCS connected.');
        let buffer = "";
        dcs_socket.on('data', function(data) {
            buffer += data;
            let i = 0;
            while ((i = buffer.indexOf("\n")) >= 0) {
                console.log("MSG FROM DCS: " + buffer.substring(0, i));
                buffer = buffer.substring(i + 1);
            }
        });
    }).listen(3001);

};