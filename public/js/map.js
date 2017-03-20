/* global MissionIntelApp */
MissionIntelApp.Map = function(app) {

    /* GLOBAL FUNCTIONS */
    this.toggleLayer = function(layerName) {
        toggleLayer(layerName);
    };


    /* LOCAL FUNCTIONS */
    function toggleLayer(layerName) {
        layerName.setVisible((!layerName.getVisible()));
    }

    function onMarkerClick(browserEvent) {
        var coordinate = browserEvent.coordinate;
        var pixel = map.getPixelFromCoordinate(coordinate);
        map.forEachFeatureAtPixel(pixel, function(feature) {
          if(feature.getProperties().SIDC) {
            // Display some option window
            // Reverse parse the SIDC and put that data in the window. This window then needs to have a button with a Save Event on it
            console.log(feature.getProperties().SIDC);
          } 
        });
    }

    function get(el) {
        if (typeof el == 'string') return document.getElementById(el);
        return el;
    }

    function findProjectedRadius(center, radius) {
        var edgeCoord = [center[0] + radius, center[1]];
        var wgs84Sphere = new ol.Sphere(6378137);
        var groundRadius = wgs84Sphere.haversineDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoord, 'EPSG:3857', 'EPSG:4326'));

        return groundRadius;
    }

    function addMarkersToLayerBySource(source, lookup, layer) {
        if (!layer.getSource()) {
            layer.setSource(new ol.source.Vector());
        }

        source.forEachFeature(function(f) {
            if (f.getProperties().source == lookup) {
                var mySymbol = new ms.symbol(
                    f.getProperties().SIDC, {
                        // size: iconSize[(f.getProperties().SIDC).charAt(11)],
                        uniqueDesignation: f.getProperties().name
                    }
                );

                var myCanvas = mySymbol.getMarker().asCanvas();

                f.setStyle(new ol.style.Style({
                    image: new ol.style.Icon(({
                        scale: 1,
                        anchor: [mySymbol.markerAnchor.x, mySymbol.markerAnchor.y],
                        anchorXUnits: 'pixels',
                        anchorYUnits: 'pixels',
                        imgSize: [Math.floor(mySymbol.width), Math.floor(mySymbol.height)],
                        img: (myCanvas)
                    }))
                }));
                layer.getSource().addFeature(f);
            }
        });
    }

    function updateMap(source) {
        let ratio = window.devicePixelRatio || 1;
        let collection = [];

        // Console.log time of last marker update
        let  time = new Date();
        console.log('-> MARKER UPDATE: ' +
            ("0" + time.getHours()).slice(-2)   + ":" + 
            ("0" + time.getMinutes()).slice(-2) + ":" + 
            ("0" + time.getSeconds()).slice(-2));

        // Convert source into an OL3 source
        let s = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(source, {
                featureProjection: 'EPSG:3857'
            })
        });

        // Generate Markers - CHANGE dcsSOURCE FOR THE ABOVE s SOURCE TO USE DATA FROM MAIN.JS!!
        s.forEachFeature(function(f) {
            // let track = new Date();
            // track = 'TR' + ("0" + time.getMinutes()).slice(-2) + ("0" + time.getMilliseconds()).slice(-2);

            // Draw Marker
            var mySymbol = new ms.symbol(
                f.getProperties().SIDC, {
                    size: (f.getProperties().size*ratio),
                    altitudeDepth: 'FL' + f.getProperties().alt,
                    direction: f.getProperties().hdg,
                    speed: Math.round(f.getProperties().speed) + ' kt',
                    type: f.getProperties().type,
                    uniqueDesignation: 'TR' + f.getProperties().name,
                    monoColor: f.getProperties().monoColor
                    // infoColor: 'white'
                }
            );

            var myCanvas = mySymbol.asCanvas();

            f.setStyle(new ol.style.Style({
                image: new ol.style.Icon(({
                    scale: 1/ratio,
                    anchor: [mySymbol.getAnchor().x, mySymbol.getAnchor().y],
                    anchorXUnits: 'pixels',
                    anchorYUnits: 'pixels',
                    imgSize: [Math.floor(mySymbol.getSize().width), Math.floor(mySymbol.getSize().height)],
                    //snapToPixel: false, // ENABLE THIS IF ICONS START GETTING JITTERY
                    img: (myCanvas)

                }))
            }));

            // Add it to some Array to be put to a layer later
            collection.push(f);

        });

        // Remove all old features from the layer group
        _group.getLayers().clear(true);

        // Add updated features to layer TODO: THE BELOW FUNCTION DOES NOT WORK... THE COLLECTION IS JUST PASSED TO THE streamLayer (SEE BELOW)
        [].forEach.call(collection, function(obj) {
            let exists;
            
            // If there is a layer with an ID equal to SOURCE then this layer exists and we will add the feature to this layer
            _group.getLayers().forEach(function(layer) {
                if(layer.getProperties().id == obj.getProperties().source) { 
                    exists = true;
                    layer.getSource().addFeature(obj);
                } 
            });

            // .. if there is not - then we have to make it, add a source and then add the feature here
            if (!exists) {
                let grp = _group.getLayers();
                grp.push(new ol.layer.Vector({
                    id: obj.getProperties().source,
                    source: new ol.source.Vector({
                        features: obj
                    })
                }));
                _group.setLayers(grp);
            }
        });
        
        // UNCOMMENT BELOW IN ORDER TO SEND COLLECTION TO A PRE-MADE LAYER
        streamLayer.getSource().clear(true);
        streamLayer.getSource().addFeatures(collection);
        //console.log(collection);
    }

    var jsonify=function(o){
        var seen=[];
        var jso=JSON.stringify(o, function(k,v){
            if (typeof v =='object') {
                if ( seen.indexOf(v) != -1 ) { return '__cycle__'; }
                seen.push(v);
            } return v;
        });
    return jso;
};

    this.update = function(source) {
        updateMap(source);
    };

    function drawInteraction(source, brush) {
        if (brush !== 'None') {
            draw = new ol.interaction.Draw({
                source: source,
                type: /** @type {ol.geom.GeometryType} */ (brush),
            });

            map.addInteraction(draw);
        }
    }

    function getObjectID(object) {

        // Dersom den globale variabelen "_objectIDs" ikkje fins
        if (window._objectIDs === undefined)
            // Lag den og sett den til 0
            window._objectIDs = 0;

        // Dersom dette objektet ikkje har en attribut "_objectID"
        if (object._objectID === undefined) {
            // Legg til attributen, sett den til å være antallet objectIDs (globale variabelen)
            object._objectID = window._objectIDs;
            // Inkrementèr antall objectIDs
            window._objectIDs++;
        }

        // Returner IDen til objektet (som vi kanskje lagde over)
        return object._objectID;
    }

    /* GLOBALS */
    var draw;


    /* SOURCES */
    var dcsSource = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(dcsStream, {
            featureProjection: 'EPSG:3857'
        })
    });

    var drawSource = new ol.source.Vector({
        wrapX: false
    });

    var vectorSource = new ol.source.Vector({
        loader: function() {
            var url = 'src/vectors/vectors.geojson';
            var source = this;

            app.getJSON(url, '', function(r) {

                if (Object.keys(r).length > 0) {
                    var f = (new ol.format.GeoJSON()).readFeatures(r, {
                        featureProjection: 'EPSG:3857'
                    });
                    source.addFeatures(f);
                }

                // Replace all features of type Point with a Circle feature in stead.
                source.forEachFeature(function(f) {

                    if (f.getGeometry().getType() == 'Point') {

                        var circle = new ol.geom.Circle(f.getGeometry().getCoordinates(), 1);
                        circle.setRadius(findProjectedRadius(circle.getCenter(), f.getProperties().radius));

                        var circleFeature = new ol.Feature(circle);

                        circleFeature.setProperties({
                            name: f.getProperties().name,
                            type: f.getProperties().type
                        });

                        var style = new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: f.getProperties().color,
                                width: 1
                            }),
                            fill: new ol.style.Fill({
                                color: f.getProperties().colorBg
                            })
                        });

                        circleFeature.setStyle(style);

                        source.addFeature(circleFeature);
                        source.removeFeature(f);
                    }

                    if (f.getGeometry().getType() == 'Polygon') {
                        //console.log(f.getGeometry().getCoordinates());
                        var style = new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                //color: 'blue',
                                color: f.getProperties().color,
                                width: 1
                            }),
                            fill: new ol.style.Fill({
                                //color: 'rgba(0, 0, 255, 0.1)'
                                color: f.getProperties().colorBg
                            })
                        });

                        f.setStyle(style);
                    }
                });
            });
        }
    });

    /* STYLES */
    var defaultStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255,0,0,0.5)',
            width: 1
        })
    });

    var selectStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(95,95,95,1)',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(95,95,95,0.1)'
        }),
    });

    /* LAYER GROUPS */
    let _group = new ol.layer.Group;


    /* LAYERS SETUP */
    var vectorLayer = new ol.layer.Vector({ // "Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors."
        id: 'vectors',
        source: vectorSource
    });

    // var plannedLayer = new ol.layer.Vector({
    //     id: 'planned'
    // });

    var streamLayer = new ol.layer.Vector({
        id: 'stream',
        source: new ol.source.Vector()
    });

    var drawLayer = new ol.layer.Vector({
        id: 'draw',
        source: drawSource
    });

    var mapLayer = new ol.layer.Tile({
        id: 'map',
        preload: 4,
        source: new ol.source.TileJSON({
            url: 'http://api.tiles.mapbox.com/v4/mapbox.dark.json?access_token=pk.eyJ1Ijoic2d0dGVkIiwiYSI6ImNpdWZ1bmZ0OTAwMWoyem5uaGl4a2s0ejIifQ.aqtpdqUySGs1lrPbtITp0g',
            crossOrigin: 'anonymous'
        })
    });

    // addMarkersToLayerBySource(dcsSource, 'planned', plannedLayer);
    addMarkersToLayerBySource(dcsSource, 'awacs', streamLayer);
    // addMarkersToLayerBySource(dcsSource, 'planned', new ol.layer.Vector({
    //     id: 'planned'
    // }));

    /* CONTROLS SETUP */
/*     var mousePositionControl = new ol.control.MousePosition({
         coordinateFormat: ol.coordinate.createStringXY(4),
         projection: 'EPSG:4326'
     });*/

    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: function(coord) {
            return ol.coordinate.toStringHDMS(coord, 3);
        },
        projection: 'EPSG:4326'
    });

    var scaleLineControl = new ol.control.ScaleLine();

    /* VIEW SETUP */
    var center = ol.proj.transform([42.000, 42.000], 'EPSG:4326', 'EPSG:3857');

    var view = new ol.View({
        center: center,
        zoom: 8
    });

    /* MAP SETUP */
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
    map.addLayer(vectorLayer);
    map.addLayer(drawLayer);
    map.addLayer(_group);
    map.addLayer(streamLayer);
    // map.addLayer(plannedLayer);

    /* EVENTS */
    map.on('singleclick', onMarkerClick);

    // --> map filters
    document.getElementById("map-filters-awacs").onclick = function(element) {
        document.getElementById("map-filters-awacs").classList.toggle("enabled-map-menu-object");
        document.getElementById("map-filters-awacs").classList.toggle("disabled-map-menu-object");
        toggleLayer(streamLayer);
    };

    document.getElementById("map-filters-planned").onclick = function(element) {
        document.getElementById("map-filters-planned").classList.toggle("enabled-map-menu-object");
        document.getElementById("map-filters-planned").classList.toggle("disabled-map-menu-object");
        toggleLayer(plannedLayer);
    };

    // --> drawing brushes
    document.getElementById('map-draw-brush-type-selector').onclick = function() {
        this.classList.toggle("wrapper-dropdown-active");
    };

    document.getElementById("map-draw-brush-type-none").onclick = function(el) {
        map.removeInteraction(draw);
    };

    document.getElementById("map-draw-brush-type-point").onclick = function(el) {
        map.removeInteraction(draw);
        drawInteraction(drawSource, "Point");
    };

    document.getElementById("map-draw-brush-type-circle").onclick = function(el) {
        map.removeInteraction(draw);
        drawInteraction(drawSource, "Circle");
    };

    document.getElementById("map-draw-brush-type-polygon").onclick = function(el) {
        map.removeInteraction(draw);
        drawInteraction(drawSource, "Polygon");
    };

    document.getElementById("map-draw-brush-type-linestring").onclick = function(el) {
        map.removeInteraction(draw);
        drawInteraction(drawSource, "LineString");
    };

    // --> drawing controls
    drawSource.on('addfeature', function(e) {
        // add controls for deleting and manipulating all features in the source
        var container = document.getElementById("map-draw-features");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        var containerLastChild = container.lastChild;

        drawSource.forEachFeature(function(f) {
            var objectID = getObjectID(f);
            var node = document.createElement("LI");


            if (!f.getProperties().name) {
                f.setProperties({
                    name: f.getGeometry().getType(),
                }, true);
            }

            //node.className = 'enabled-map-menu-object';
            node.classList.add('enabled-map-menu-object');
            node.innerHTML = "<span class='inline-flex'><i class='icon-block' /></i><i class='icon-cog'></i><i class='icon-user-plus'></i><textarea id='map-draw-feature-namebox'>" + f.getProperties().name + "</textarea></span></li>";

            // IDEA put the below code into a function addDrawingEvents(feature, node);
            var geometryCoords;
            var inputCoords;

            // CREATE NODE
            if (f.getGeometry().getType() == 'Point') {
                var geometryCoords = ol.proj.toLonLat(f.getGeometry().getCoordinates());
                node.innerHTML = node.innerHTML + "<div id='map-draw-opt-actions' class='opt-actions'><ul>"+
                                                    "<li class='opt opt-color'>COLOR:</li>" +
                                                    "<li class='opt opt-color'><textarea></textarea></li>" +
                                                    "<li class='opt opt-fillcolor'>FILL COLOR</li>" + 
                                                    "<li class='opt opt-fillcolor'><textarea></textarea></li>" +
                                                    "<li class='opt opt-coord'>COORDS:</li>" +
                                                    "<li class='opt opt-coord-input opt-coord'><textarea class='opt-coord-inputx'>" + geometryCoords[0].toFixed(7) + "</textarea><textarea class='opt-coord-inputy'>" + geometryCoords[1].toFixed(7) + "</textarea></li>" +
                                                    "</ul></div>";

                // var circle = new ol.geom.Circle(f.getGeometry().getCoordinates(), 1);
                // circle.setRadius(findProjectedRadius(circle.getCenter(), f.getProperties().radius));
            }

            if (f.getGeometry().getType() == 'Circle') {
                var geometryCoords = ol.proj.toLonLat(f.getGeometry().getCenter());
                // node.innerHTML = node.innerHTML + "<div id='map-draw-opt-actions' class='opt-actions'><ul>\
                //                                   <li class='opt opt-color'>COLOR:</li>\
                //                                   <li class='opt opt-color'><textarea></textarea></li>\
                //                                   <li class='opt opt-fillcolor'>FILL COLOR</li>\
                //                                   <li class='opt opt-fillcolor'><textarea></textarea></li>\
                //                                   <li class='opt opt-radius'>RADIUS:</li>\
                //                                   <li class='opt opt-radius'><textarea></textarea></li>\
                //                                   <li class='opt opt-coord'>CENTER:</li>\
                //                                   <li class='opt opt-coord-center opt-coord'><textarea class='opt-coord-inputx'>" + geometryCoords[0].toFixed(7) + "</textarea><textarea class='opt-coord-inputy'>" + geometryCoords[1].toFixed(7) + "</textarea></li>\
                //                                   </ul></div>";

                node.innerHTML = node.innerHTML + "<div id='map-draw-opt-actions' class='opt-actions'><ul>\
                                                  <li class='opt opt-color'>COLOR:</li>\
                                                  <li class='opt opt-color'><input id='map-draw-circle-color' type='color' /></li>\
                                                  <li class='opt opt-fillcolor'>FILL COLOR</li>\
                                                  <li class='opt opt-fillcolor'><input id='map-draw-circle-fill' type='color' /></li>\
                                                  <li class='opt opt-radius'>RADIUS:</li>\
                                                  <li class='opt opt-radius'><textarea></textarea></li>\
                                                  <li class='opt opt-coord'>CENTER:</li>\
                                                  <li class='opt opt-coord-center opt-coord'><textarea class='opt-coord-inputx'>" + geometryCoords[0].toFixed(7) + "</textarea><textarea class='opt-coord-inputy'>" + geometryCoords[1].toFixed(7) + "</textarea></li>\
                                                  </ul></div>";
            }

            if (f.getGeometry().getType() == 'Polygon') {
                var geometryCoords = f.getGeometry().getCoordinates();
                var coordHTML = '';

                geometryCoords[0].forEach(function(c) {
                    var c = ol.proj.toLonLat(c);
                    coordHTML = coordHTML + "<li class='opt opt-coord-center opt-coord'><textarea class='opt-coord-inputx'>" + c[0].toFixed(7) + "</textarea><textarea class='opt-coord-inputy'>" + c[1].toFixed(7) + "</textarea></li>"
                });

                node.innerHTML = node.innerHTML + "<div id='map-draw-opt-actions' class='opt-actions'><ul>\
                                                  <li class='opt opt-color'>COLOR:</li>\
                                                  <li class='opt opt-color'><textarea></textarea></li>\
                                                  <li class='opt opt-fillcolor'>FILL COLOR</li>\
                                                  <li class='opt opt-fillcolor'><textarea></textarea></li>\
                                                  <li class='opt opt-radius'>RADIUS:</li>\
                                                  <li class='opt opt-radius'><textarea></textarea></li>\
                                                  <li class='opt opt-coord'>COORDS:</li>" + coordHTML + "</ul></div>";
            }

            container.appendChild(node);

            // EVENTS
            node.querySelector('[id="map-draw-feature-namebox"]').onblur = function() {
                f.setProperties({
                    name: this.value,
                }, true);
            }

            node.querySelector(".icon-block").onclick = function() {
                drawSource.removeFeature(f);
                node.parentNode.removeChild(node);
            }

            node.querySelector(".icon-cog").onclick = function() {
                node.querySelector(".opt-actions").classList.toggle("opt-actions-active");

                if (f.getGeometry().getType() == 'Point') {
                    inputCoords = [parseFloat(node.querySelector(".opt-coord-inputx").value), parseFloat(node.querySelector(".opt-coord-inputy").value)];
                    inputCoords = ol.proj.fromLonLat(inputCoords);
                    f.getGeometry().setCoordinates(inputCoords);
                }

                if (f.getGeometry().getType() == 'Circle') {
                    inputCoords = [parseFloat(node.querySelector(".opt-coord-inputx").value), parseFloat(node.querySelector(".opt-coord-inputy").value)];
                    inputCoords = ol.proj.fromLonLat(inputCoords);
                    f.getGeometry().setCenter(inputCoords);

                    // TODO This should be made into a function of some sort:
                    // var style = new ol.style.Style({
                    //     stroke: new ol.style.Stroke({
                    //         color: node.querySelector(".map-draw-circle-color").value,
                    //         width: 2
                    //     }),
                    //     fill: new ol.style.Fill({
                    //         color: node.querySelector(".map-draw-circle-fill").value
                    //     }),
                    // });
                    // f.setStyle(style);
                    // console.log(f.getStyle());
                    console.log(node.querySelector(".map-draw-circle-color").value);
                }

                if (f.getGeometry().getType() == 'Polygon') {
                    // XXX Continue here! Need to convert and store new coords. Most likely the whole object could be stored, but how to get all the inputs...?

                    // inputCoords = [parseFloat(node.querySelector(".opt-coord-inputx").value), parseFloat(node.querySelector(".opt-coord-inputy").value)];
                    // inputCoords = ol.proj.fromLonLat(inputCoords);
                    // f.getGeometry().setCenter(inputCoords);
                }

                // TODO update color information
            }

            node.querySelector(".icon-user-plus").onclick = function() {
                this.classList.toggle("icon-user-plus-active");
                // BUG this gets disabled when the list re-renders. Probably a status property will have to be added to f and checked
            }

            //console.log(f._objectID);

        })

        // IDEA Create JSON string and store on computer
    });

    // var geo = (new ol.format.GeoJSON).writeFeatures(vectorLayer.getSource().getFeatures());
    // console.log(geo);

    // vectorSource.on('change', function(e) {
    //   console.log('change!');
    // });

};
