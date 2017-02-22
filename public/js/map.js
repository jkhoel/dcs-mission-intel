/* global MissionIntelApp */
MissionIntelApp.Map = function() {

    this.toggleLayer = function(layerName) {
        toggleLayer(layerName);
    }

    function toggleLayer(layerName) {
        layerName.setVisible((!layerName.getVisible()));
    }


    // SOURCES
    var jsonSource = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(jsonStream, {
            featureProjection: 'EPSG:3857'
        })
    });

    var plannedSource = new ol.source.Vector();
    var awacsSource = new ol.source.Vector();

    // MILSYM CODE
    var iconSize = {
        "C": 15,
        "D": 20,
        "E": 25,
        "F": 30,
        "G": 35,
        "H": 40,
        "I": 45
    };

    jsonSource.forEachFeature(function(f) {
        var mysymbol = new MS.symbol(
            f.getProperties().SIDC, {
                size: iconSize[(f.getProperties().SIDC).charAt(11)],
                uniqueDesignation: f.getProperties().name
            }
        );

        var mycanvas = mysymbol.getMarker().asCanvas();

        f.setStyle(new ol.style.Style({
            image: new ol.style.Icon(({
                scale: 1,
                anchor: [mysymbol.markerAnchor.x, mysymbol.markerAnchor.y],
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                imgSize: [Math.floor(mysymbol.width), Math.floor(mysymbol.height)],
                img: (mycanvas)
            }))
        }));

        // Split features to different source objects
        var source = f.getProperties().source;



        if (source == 'planned') {
            plannedSource.addFeature(f);
        } else if (source == 'awacs') {
            awacsSource.addFeature(f);
        }

    });

    // LAYERS SETUP
    // var jsonLayer = new ol.layer.Vector({
    //     id: 'milsym',
    //     //source: vectorSource2
    //     source: jsonSource
    // })

    var plannedLayer = new ol.layer.Vector({
        id: 'planned',
        source: plannedSource
    })

    var awacsLayer = new ol.layer.Vector({
        id: 'awacs',
        source: awacsSource
    })

    var mapLayer = new ol.layer.Tile({
        id: 'map',
        preload: 4,
        source: new ol.source.TileJSON({
            url: 'http://api.tiles.mapbox.com/v4/mapbox.dark.json?access_token=pk.eyJ1Ijoic2d0dGVkIiwiYSI6ImNpdWZ1bmZ0OTAwMWoyem5uaGl4a2s0ejIifQ.aqtpdqUySGs1lrPbtITp0g',
            crossOrigin: 'anonymous'
        })
    });

    // CONTROLS SETUP
    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326'
    });

    var scaleLineControl = new ol.control.ScaleLine();

    // VIEW SETUP
    var center = ol.proj.transform([42.000, 42.000], 'EPSG:4326', 'EPSG:3857');

    var view = new ol.View({
        center: center,
        zoom: 8
    });

    // MAP SETUP
    var map = new ol.Map({
        target: 'div-map',
        controls: ol.control.defaults({
            attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                collapsible: true
            })
        }).extend([mousePositionControl, scaleLineControl]),
        view: view,
    });

    map.addLayer(mapLayer);
    //map.addLayer(jsonLayer);
    map.addLayer(plannedLayer);
    map.addLayer(awacsLayer);

    // EVENTS
    document.getElementById("map-filters-awacs").onclick = function(element) {
        document.getElementById("map-filters-awacs").classList.toggle("enabled-filter");
        document.getElementById("map-filters-awacs").classList.toggle("disabled-filter");
        toggleLayer(awacsLayer);
    };

    document.getElementById("map-filters-planned").onclick = function(element) {
        document.getElementById("map-filters-planned").classList.toggle("enabled-filter");
        document.getElementById("map-filters-planned").classList.toggle("disabled-filter");
        toggleLayer(plannedLayer);
    };

};
