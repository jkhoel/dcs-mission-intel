var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public')); // ← adjust
app.listen(8080);

MissionIntelApp = {};
require('./public/js/comm.js');
require('./public/js/marker.js');
require('./public/js/marker-fids.js');

var Utility = require('./public/js/utility.js');
var SIDC = require('./public/js/sidc.js');

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

console.log(':: SERVER IS RUNNING!');

class Unit {

    static parse(data) {
        let track = new Date();
        track = 'TR' + ("0" + track.getMinutes()).slice(-2) + ("0" + track.getMilliseconds()).slice(-2);

        let unit = new Unit();
        unit.type           = data[0];
        unit.x              = data[1];
        unit.y              = data[2];
        unit.z              = data[3];
        unit.hdg            = data[4];
        unit.speed          = data[5];
        unit.callsign       = data[6];
        unit.name           = track;
        return unit;
    }

    static sidc(type) {

    }

    constructor() {
        this.type           = "";
        this.x              = 0;
        this.y              = 0;
        this.z              = 0;
        this.hdg            = 0;
        this.speed          = 0;
        this.callsign       = "";
        this.name           = "";
        this.sidc           = "";
    }
}

function toGeoJSON(dcsData) {

    // TODO: create and return GeoJSON data here ...

    // Example usage:

    // Red units
    //let blueUnits = dcsData.blue;
    // First red unit
    //let blueUnit0 = Unit.parse(blueUnits[0]);

    // All data printed to console
    //console.log(dcsData);

    // let geoJSONData = dcsData;

    // These will be featureCollection array holds all features to pass onto the client arranged into individual objects pr. unit (see GeoJSON documentation)
    let featureCollection = [];

    // TODO: ADD MORE CODE TO DECIDE WHAT SIDE IS FRIENDLY TO THE CLIENT
    let _friendlies = dcsData.blue;
    let _foes = dcsData.red;
    let _all = dcsData.blue.concat(dcsData.red);

    [].forEach.call(_friendlies, function(el) {
        let unit = Unit.parse(el);
        
        // Call function to generate SIDC here! TODO: Update to Milsym 1.0.0!

        console.log(Utility.trackNum(unit.callsign));

        // Add unit to the feature collection
        featureCollection.push ({
                lat: unit.x,
                lon: unit.y,
                alt: Utility.metersToFL(unit.z),
                hdg: unit.hdg,
                speed: unit.speed,
                monoColor: 'rgb(128, 224, 255)',
                //SIDC: 'SFGPUCIZ--AH***',
                //SIDC: 'SFAPMFF----F***',
                SIDC: 'SFAPMFF----F***',
                side: 'blue',
                source: 'awacs',
                type: unit.type,
                name: Utility.trackNum(unit.callsign)
            });
    });

    [].forEach.call(_foes, function(el) {
        let unit = Unit.parse(el);
        
        featureCollection.push ({
                lat: unit.x,
                lon: unit.y,
                alt: Utility.metersToFL(unit.z),
                hdg: unit.hdg,
                speed: unit.speed,
                monoColor: 'rgb(255, 88, 88)',
                //SIDC: 'SHAPMFF----F***',
                SIDC: 'SHAPMFF----F***',
                side: 'red',
                source: 'awacs',
                type: unit.type,
                name: Utility.trackNum(unit.callsign)
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
