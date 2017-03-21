module.exports = function DCSDataRetriever(dataCallback) {

    const PORT = 3001;
    const ADDRESS = "127.0.0.1";

    const net = require('net');

    const client = net.createConnection({host: ADDRESS, port: PORT}, () => {
        console.log('connected to server!');
    });

    client.on('data', (data) => {
        let dcsData = JSON.parse(data.toString());
        dataCallback(dcsData);
    });

    client.on('error', () => {
        console.log('disconnected from server!');
    });
};
