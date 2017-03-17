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
        wsConnections.splice(wsConnections.indexOf(conn), 1);
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
    //console.log(dcsData);

    // let geoJSONData = dcsData;

    // These will be featureCollection array holds all features to pass onto the client arranged into individual objects pr. unit (see GeoJSON documentation)
    var featureCollection = [];

    // TODO: ADD MORE CODE TO DECIDE WHAT SIDE IS FRIENDLY TO THE CLIENT
    var _friendlies = dcsData.blue;
    var _foes = dcsData.red;

    [].forEach.call(_friendlies, function(el) {

        // Call function to generate SIDC here! TODO: Update to Milsym 1.0.0!

        // Add unit to the feature collection
        featureCollection.push ({
                lat: el[1],
                lon: el[2],
                alt: el[3],
                monoColor: 'rgb(128, 224, 255)',
                //SIDC: 'SFGPUCIZ--AH***',
                SIDC: 'SFAPMFF----F***',
                side: 'blue',
                source: 'awacs',
                type: el[0]
            });
    });

    [].forEach.call(_foes, function(el) {
        featureCollection.push ({
                lat: el[1],
                lon: el[2],
                alt: el[3],
                //monoColor: 'rgb(255, 128, 128)',
                monoColor: 'rgb(255, 88, 88)',
                SIDC: 'SHAPMFF----F***',
                //SIDC: 'SHGPUCIZ----***',
                side: 'red',
                source: 'awacs',
                type: el[0]
            });
    });

    let geoJSONData = GeoJSON.parse(featureCollection, {Point: ['lat', 'lon']});
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
