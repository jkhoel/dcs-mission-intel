module.exports = function DCSDataRetriever(dataCallback) {

    const PORT = 3001;
    const ADDRESS = "127.0.0.1";
    //const ADDRESS = "89.11.174.88";

    const net = require('net');

    function connect() {

        const client = net.createConnection({host: ADDRESS, port: PORT}, () => {
            let time = new Date();
            console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ' :: Connected to DCS server!');
            //console.log("Connected");
        });

        client.on('data', (data) => {
            let dcsData = JSON.parse(data.toString());
            dataCallback(dcsData);
        });

        client.on('close', () => {
            time = new Date();
            console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ' :: Disconnected from DCS server!');
        });

        client.on('error', () => {
            connect();
        });
    }

    connect();
};