/* global MissionIntelApp */
// THE MINTERFACE!
MissionIntelApp.GUI = function () {

    var WIDTH = window.innerWidth - 1;
    var HEIGHT = window.innerHeight - 1;
    var mapCanvas;
    //var canvas;
    var menuDiv;
    var mapContext;
    var context;
    var srcObjectNames = {AWACS: "AWACS", JSTAR: "JSTAR", HUMINT: "HUMINT", GEOINT: "GEOINT", SIGINT: "SIGINT"};
    var forceObjectNames = {INFANTRY: "Infantry", ARMOR: "Armor", AIRASSETS: "Air-Assets"};            // MOVE THIS ARRAY TO DCSUNIT LATER?
    var mapObj = new Image();
    var mapZ = (Object.keys(srcObjectNames).length + 2 * Object.keys(forceObjectNames).length) * -1;

    /**
     * Initialize GUI
     */
    this.initialize = function () {

        ///////////////////////////////////////////
        // Set up all CANVASes and DIVs
        menuDiv = document.createElement("div");
        menuDiv.width = WIDTH;
        menuDiv.height = HEIGHT;
        menuDiv.id = "div-menu";
        menuDiv.style = "z-index: 1; position:absolute; left:0px; top:0px;";
        document.body.appendChild(menuDiv);

        mapCanvas = document.createElement("canvas");
        mapCanvas.id = "canvas-map";
        mapCanvas.style = "z-index:" + mapZ + "; position:absolute; left:0px; top:0px;";
        mapCanvas.width = WIDTH;
        mapCanvas.height = HEIGHT;
        document.body.appendChild(mapCanvas);
        mapContext = mapCanvas.getContext("2d");

        ///////////////////////////////////////////
        // Assign GUI menu to DIV
        var menu = new dat.GUI({autoPlace: false});
        var menuDiv = document.getElementById('div-menu');
        menuDiv.appendChild(menu.domElement);

        var f1 = menu.addFolder('SOURCES');
        var srcObjects = {};
        for (var i in srcObjectNames) {
            // Add an object and definition
            srcObjects[i] = true;

            // Add button and define function
            var btn = f1.add(srcObjects, i);
            btn.onChange(function () {  
                //console.log("Toggled" + i);
                if (srcObjects[i])
                    document.getElementById("source-canvas-" + i).style.visibility = "visible";     // Change this to instead toggle a class
                else
                    document.getElementById("source-canvas-" + i).style.visibility = "hidden";
            });
        }

        var f2 = menu.addFolder('BLUEFOR');
        var bforObjects = {};
        for (var i in forceObjectNames) {
            // Add an object and definition
            bforObjects[i] = true;

            // Add button and define function
            var btn = f2.add(bforObjects, i);
            btn.onChange(function () {
                if (bforObjects[i])
                    document.getElementById("bluefor-canvas-" + i).style.visibility = "visible";
                else
                    document.getElementById("bluefor-canvas-" + i).style.visibility = "hidden";
            });
        }

        var f3 = menu.addFolder('REDFOR');
        var rforObjects = {};
        for (var i in forceObjectNames) {
            // Add an object and definition
            rforObjects[i] = true;

            // Add button and define function
            var btn = f3.add(rforObjects, i);
            btn.onChange(function () {
                if (rforObjects[i])
                    document.getElementById("redfor-canvas-" + i).style.visibility = "visible";
                else
                    document.getElementById("redfor-canvas-" + i).style.visibility = "hidden";
            });
        }

        // Set all folder to open by default
        f1.open();
        f2.open();
        f3.open();

        console.log("--> GUI initialized");

        // Draw Map
        mapObj.src = 'resources/img/map.jpg';
        mapContext.drawImage(mapObj, -4000, -3000);

        console.log("--> MAP Drawn");
        ///////////////////////////////////////////

    };

    /**
     * Add unit
     * @param {DCSUnit} markerHash
     */
    this.addMarker = function (markerHash) {
        //ADD CODE HERE!
        //MS.setStandard("APP6");
        //var canvasElement = new MS.symbol(markerHash, {size: 90}).getMarker().asCanvas();
    };

    /**
     * Remove all units from view
     */
    this.clearUnits = function () {
        context.clearRect();
    };

    //this.initialize();  
};
