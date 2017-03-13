var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public')); // ← adjust
app.listen(8080);

MissionIntelApp = {};
require('./public/js/comm.js');
require('./public/js/marker.js');
require('./public/js/marker-fids.js');

var GeoJSON = require('geojson');

var wsConnections = [];

var websocket = require('nodejs-websocket');
var server = websocket.createServer(function(conn) {

    console.log("Client connected");
    wsConnections.push(conn);
    conn.on("close", function(code, reason) {
        wsConnection.splice(wsConnections.indexOf(conn), 1);
        console.log("Client disconnected");
    });
});

class Unit {

    static parse(data) {
        let unit = new Unit();
        unit.type = data[0];
        unit.x = data[1];
        unit.y = data[2];
        unit.z = data[3];
        return unit;
    }

    constructor() {
        this.type = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}

function toGeoJSON(dcsData) {

    // TODO: create and return GeoJSON data here ...

    // Example usage:

    // Red units
    let blueUnits = dcsData.blue;
    // First red unit
    let blueUnit0 = Unit.parse(blueUnits[0]);

    // Read some properties of the unit

    // All data printed to console
    // console.log(dcsData);

    // let geoJSONData = dcsData;

    // featureCollection object holds all features to pass onto the client arranged into individual arrays pr. unit (see GeoJSON documentation)
    var featureCollection = [];

    // Blue Markers
    [].forEach.call(dcsData.blue, function(el,i) {
        featureCollection[i] = {
                type: el[0],
                x: el[1],
                y: el[2],
                z: el[3],
                source: el[4],
                side: 'blue'
            };
    });

    // Red Markers -- ERROR!! This will overwrite blue features because of the i value
    // [].forEach.call(dcsData.red, function(el,i) {
    //     featureCollection[i] = {
    //             type: el[0],
    //             x: el[1],
    //             y: el[2],
    //             z: el[3],
    //             source: el[4],
    //             side: 'blue'
    //         };
    // });


    let geoJSONData = GeoJSON.parse(featureCollection, {Point: ['x', 'z']});
    // console.log(geoJSONData);

    return geoJSONData;
}

function receiveDCSData(dcsData) {

    let geoJSONData = toGeoJSON(dcsData);
    for (let connection in wsConnections)
        wsConnections[connection].sendText(JSON.stringify(geoJSONData));
}

server.listen(8081);
var dcsdr = require('./server/dcsdataretriever.js');
dcsdr(receiveDCSData);
