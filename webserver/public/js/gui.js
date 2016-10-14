/* global MissionIntelApp */
// THE MINTERFACE!
MissionIntelApp.GUI = function () {

    var WIDTH = window.innerWidth - 1;
    var HEIGHT = window.innerHeight - 1;

    var mapCanvas;
    var mapContext;

    var menuDiv;
    var markerDiv;

    var srcObjectNames = {AWACS: "AWACS", JSTAR: "JSTAR", HUMINT: "HUMINT", GEOINT: "GEOINT", SIGINT: "SIGINT"};
    var forceObjectNames = {INFANTRY: "Infantry", ARMOR: "Armor", AIRASSETS: "Air-Assets"};            // This needs to be grouped somewhere based on marker-fids
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
        menuDiv.style = "z-index: 0; position:absolute; left:0px; top:0px;";
        document.body.appendChild(menuDiv);

        markerDiv = document.createElement("div");
        markerDiv.width = WIDTH;
        markerDiv.height = HEIGHT;
        markerDiv.id = "div-markers";
        markerDiv.style = "z-index: -1; position:absolute; left:0px; top:0px;";
        document.body.appendChild(markerDiv);

        mapCanvas = document.createElement("canvas");
        mapCanvas.id = "canvas-map";
        //mapCanvas.style = "z-index:" + mapZ + "; position:absolute; left:0px; top:0px;";
        mapCanvas.style = "z-index:-2; position:absolute; left:0px; top:0px;";
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
     * @param {MissionIntelApp.Marker} newMarker
     */
    this.addMarker = function (newMarker) {

        MS.setStandard("APP6");

        // Create marker element and set marker position
        var markerElement = new MS.symbol(newMarker.markerHash(), {size: 50}).getMarker().asCanvas();
        markerElement.style = "position:absolute; left:" + newMarker.x + "px; top:" + newMarker.y + "px;";

        // Check if there is an <ul> to add this element to. If not, create it
        if (!document.getElementById(newMarker.source)) {
            var ul = document.createElement("ul");
            ul.id = newMarker.source;
            document.getElementById("div-markers").appendChild(ul);
        }

        // Creates <li> and adds the element (<canvas>) to it
        var li = document.createElement("li");
        li.appendChild(markerElement)
        document.getElementById(newMarker.source).appendChild(li);
    };
    
    /**
     * Update marker
     * @param {MissionIntelApp.Marker} updateMarker
     */
    this.updateMarker = function(updateMarker) {
        
        // whipe all <li>'s
        
        // kjør addMarker       
    };



    /**
     * Remove all units from view
     */
    this.clearUnits = function () {
        context.clearRect();
    };

    //this.initialize();  
};
