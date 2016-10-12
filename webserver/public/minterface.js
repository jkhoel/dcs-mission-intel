/* global MissionIntelApp */

MissionIntelApp.GUI = function () {

    var WIDTH = window.innerWidth - 1;
    var HEIGHT = window.innerHeight - 1;

    var mapCanvas;
    var menuDiv;

    var mapContext;

    var context;

    var srcObjectNames = {AWACS: "AWACS", JSTAR: "JSTAR", HUMINT: "HUMINT", GEOINT: "GEOINT", SIGINT: "SIGINT"};
    var forceObjectNames = ["Infantry", "Armor", "Air-Assets"];            // MOVE THIS ARRAY TO DCSUNIT LATER?
    
    var mapObj = new Image();
    var mapZ = (Object.keys(srcObjectNames).length + 2 * forceObjectNames.length)* -1;
    
    console.log("--> VARs initialized");
    /**
     * Initialize GUI
     */
    this.initialize = function () {

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

        console.log("--> CANVAS/DIVs initialized");

        ///////////////////////////////////////////
        // Assign GUI menu to DIV
        var menu = new dat.GUI({autoPlace: false});
        var customContainer = document.getElementById('div-menu');
        customContainer.appendChild(menu.domElement);

        ///// MENU TOPOLOGY ////
        // SOURCES:
        //  - AWACS
        //  - JSTAR
        //  - HUMINT
        //  - GEOINT
        //  - SIGINT
        // BLUEFOR:
        //  - INFANTRY
        //  - ARMOR/LAVs
        //  - AIR ASSETS
        // REDFOR:
        //  - INFANTRY
        //  - ARMOR/LAVs
        //  - AIR ASSETS

        var f1 = menu.addFolder('SOURCES');
        var srcObjects = {};
        for (var i in srcObjectNames) {

            // Generate a canvas for each source
            mapCanvas = document.createElement("canvas");
            mapCanvas.id = "source-canvas-" + i;
            mapCanvas.style = "z-index: " + (-i) + "; position:absolute; left:0px; top:0px;";
            mapCanvas.width = WIDTH;
            mapCanvas.height = HEIGHT;
            document.body.appendChild(mapCanvas);
            mapContext = mapCanvas.getContext("2d");

            // Add an object and definition
            srcObjects[i] = true;

            // Add button and define function
            var btn = f1.add(srcObjects, i);
            btn.onChange(function () {

                if (srcObjects[i])
                    document.getElementById("source-canvas-" + i).style.setProperty("hidden", "false", 0);
                else
                    document.getElementById("source-canvas-" + i).style.setProperty("hidden", "true", 0);

            });
        }

  
        // GUI Menu Objects
        /*var srcObjects = {
         sourceAWACS: true,
         sourceJSTAR: true
         };
         
         var fltrObjects = {
         filterAllBlue: true,
         filterAllRed: true
         };
         
         var f1 = 	menu.addFolder('INTEL SOURCES');
         var sAWACS =  f1.add(srcObjects, 'sourceAWACS');
         var sJSTAR =  f1.add(srcObjects, 'sourceJSTAR');
         
         var f2 = 	menu.addFolder('BLUEFOR');
         var fltrAllBlue =  f2.add(fltrObjects, 'filterAllBlue');
         
         var f3 = 	menu.addFolder('REDFOR');
         var fltrAllRed = f3.add(fltrObjects, 'filterAllRed');*/

        f1.open();
        //f2.open();
        //f3.open();

        console.log("--> GUI initialized");
        
        // Draw Map
        mapObj.src = 'resources/img/map.jpg';
        mapContext.drawImage(mapObj, -4000, -3000);
        console.log("--> MAP Drawn");
        ///////////////////////////////////////////
    };

    /**
     * Add unit
     * @param {DCSUnit} unit
     */
    this.addUnit = function (unit) {

        if (unit.coalition == "RED")
            context.setColor(255, 0, 0);

        context.rect(unit.x, unit.z, 10, 10);
        context.fill();
    };

    /**
     * Remove all units from view
     */
    this.clearUnits = function () {
        context.clearRect();
    };

    this.initialize();
    var testUnit = new DCSUnit();
    testUnit.x = 1337;
    testUnit.z = 7331;
    testUnit.type = DCSUnit.types.TANK;
    testUnit.coalition = "RED";
    this.clearUnits();
    this.addUnit(testUnit);

};
