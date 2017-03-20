var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public')); // ← adjust
app.listen(8080);

MissionIntelApp = {};
require('./public/js/comm.js');
require('./public/js/marker.js');
require('./public/js/marker-fids.js');

var Utility = require('./public/js/utility.js');
var SIDCtable = require('./public/js/sidc.js');

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
        unit.coalition      = data[7];
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
        this.coalition      = 0;
        this.name           = "";
        this.sidc           = "";
    }
}

function toGeoJSON(dcsData) {

    let featureCollection = [];
    let _all = dcsData.blue.concat(dcsData.red);

    _all.forEach(function(el) {
        let unit = Unit.parse(el);

        // Marker to be NEUTRAL by default
        let side = '0';
        let markerColor = 'rgb(252, 246, 127)';
        
        // make a SIDC Object to store all values, so that we can override these as needed
        let lookup = SIDCtable[unit.type];
        let _sidcObject = {};
        for (var atr in lookup) {
            _sidcObject[atr] = lookup[atr];
        }

        // Automatic Side desegnation TODO: Make this an option that is default off! (Uncoomment to turn off)
        // if(unit.coalition == 1) {
        //     side = '1';
        //     markerColor = 'rgb(255, 88, 88)';
        //     _sidcObject["affiliation"] = 'H';
        // }
        // if(unit.coalition == 2) {
        //     side = '2';
        //     markerColor = 'rgb(128, 224, 255)';
        //     _sidcObject["affiliation"] = 'F';
        // }


        // Generate final SIDC string
        let _sidc = "";
        for (var atr in _sidcObject) {
                _sidc += _sidcObject[atr];
        }

        // Add unit to the feature collection
        featureCollection.push ({
                lat: unit.x,
                lon: unit.y,
                alt: Utility.metersToFL(unit.z),
                hdg: unit.hdg,
                speed: unit.speed,
                monoColor: markerColor,
                SIDC: _sidc + '***',
                side : side,
                size : 30,
                source: 'awacs',
                type: unit.type,
                name: Utility.trackNum(unit.callsign)
            });
    });

    let geoJSONData = GeoJSON.parse(featureCollection, {Point: ['lat', 'lon']});

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
